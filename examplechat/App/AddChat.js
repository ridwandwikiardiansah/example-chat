import React, {useEffect, useState} from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import axios  from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const chat = [
    {id: 1 , username: 'Customer A', message: 'hai', status: 'sent', datetime: '04-02-2023 10:48', isMe: true},
    {id: 2 , username: 'Admin', message: 'hai juga', status: 'sent', datetime: '04-02-2023 10:49', isMe: false},
]

const Item = ({title, message, isMe, datetime}) => (
    <View style={ isMe ? styles.chatBubbleMe : styles.chatBubbleUser}>
    <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
      <Text style={styles.time}>{datetime}</Text>
    </View>
  );


const AddChat = (props) => {
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [list, setList] = useState([])
    const [username, setUsername] = useState('')
    
    const getListChat = async () => {
        const getUser = await AsyncStorage.getItem('username')
        setUsername(getUser)
        const body = {
            page: 'login',
            token: 'CHAT!@#$%',
            username : getUser,
        }
    try {
        const getList =  await axios.post('http://103.75.26.78:8880/savehr/ws.listchat.php',body)
        setList(getList.data.msg)
    } catch(e){
        console.log('error', e)
    }
    }

    useEffect(()=> {
        getListChat();
    },[])

    const sendMessages = async () => {
        const getUser = await AsyncStorage.getItem('username')
        const body = {
            page: 'login',
            token: 'CHAT!@#$%',
            username :getUser,
            untuk: subject,
            pesan: message
        }
        try {
            const getList =  await axios.post('http://103.75.26.78:8880/savehr/ws.savechat.php',body)
            console.log(getList.data, 'a')
            setMessage('')
            getListChat();
        } catch(e){
            console.log('error', e)
        }
    }

    console.log(subject,'tes')

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.penerima}>
                    <TextInput placeholder='Masukkan Username Penerima' onChangeText={(e)=>setSubject(e)} />
                </View>
            <FlatList
                style={styles.chatContainer}
                showsVerticalScrollIndicator={false}
                data={list}
                renderItem={({item}) => <Item title={item.pengirim} message={item.pesan} isMe={item.pengirim === username ? true : false} datetime={item.tanggal}/>}
                keyExtractor={item => item.id}
            />
            </View>
            <View style={styles.containerTextInput}>
                <TextInput value={message} placeholder='ketik pesan disini' onChangeText={(e)=>setMessage(e)}/>
                <Icon name={"send-circle"} size={40} color={'#8AC6D0'} onPress={sendMessages}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerTextInput:{
        position: 'absolute',
        width: '95%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        bottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        alignSelf: 'center',
        backgroundColor: '#FFF'
    },
    penerima: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        bottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        alignSelf: 'center',
        marginVertical: 10
    },
    content: {
        padding: 10
    },
    chatBubbleUser: {
        padding: 10,
        backgroundColor: '#8AC6D0',
        borderRadius: 10,
        marginVertical: 10,
        flexDirection: 'column',
        alignSelf: 'flex-start',
        maxWidth: '60%',
    },
    chatBubbleMe: {
        padding: 10,
        backgroundColor: '#8AC6D0',
        borderRadius: 15,
        marginVertical: 10,
        alignSelf: 'flex-end',
        maxWidth: '60%',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    message: {
        fontSize: 18
    },
    time: {
        textAlign: 'right',
        fontSize: 10,
        marginTop: 10
    },
    chatContainer: {
        height: '80%'
    }
})

export default AddChat