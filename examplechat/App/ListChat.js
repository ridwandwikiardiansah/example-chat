import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { map } from 'lodash';
import axios from 'axios';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ListChat = ({navigation}) => {
    const [dataChat, setDataChat] = useState([]);

    const chat = [
        {id: 1 , username: 'Customer A', message: 'hai', status: 'sent', datetime: '04-02-2023 10:48', isMe: true},
        {id: 2 , username: 'Customer B', message: 'hai juga', status: 'sent', datetime: '04-02-2023 10:49', isMe: false},

        ]

        const getListChat = async () => {
            const getUser = await AsyncStorage.getItem('username')
            const body = {
                page: 'login',
                token: 'CHAT!@#$%',
                username : getUser,
            }
           try {
            const getList =  await axios.post('http://103.75.26.78:8880/savehr/ws.listchatawal.php',body)
            console.log(getList.data, 'a')
            setDataChat(getList.data.msg)
           } catch(e){
            console.log('error', e)
           }
        }
    
        useEffect(()=> {
            getListChat();
        },[])
    

    return (
       <View style={styles.container}>
           <View style={styles.content}>
               <ScrollView showsVerticalScrollIndicator={false}>
                   {
                       map(dataChat, (i,index) => (
                        <TouchableOpacity style={styles.card} key={index} onPress={()=>navigation.navigate('ChatRoom', {data:i})}>
                            <Text style={styles.username}>{i.untuk}</Text>
                            <Text numberOfLines={1}>{i.pesan}</Text>
                            <Text style={styles.time}>{moment(i.tanggal).format('DD-MM-YYYY HH:mm:ss')}</Text>
                        </TouchableOpacity>
                       ))
                   }
                   
               </ScrollView>
           </View>
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        padding: 15
    },
    card : {
        width: '100%',
        padding: 10,
        elevation: 10,
        backgroundColor: '#8AC6D0',
        borderRadius: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 20
    },
    username: {
        fontWeight: 'bold',
        fontSize: 20
    },
    time: {
        textAlign: 'right',
        fontSize: 10,
        marginTop: 10
    }
})

export default ListChat