import React, {useEffect, useState} from 'react'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'



const Home = ({navigation}) => {
    const [countNotif, setCountNotif] = useState("0")

    const getListChat = async () => {
        const getUser = await AsyncStorage.getItem('username')
        const body = {
            username : getUser,
        }
       try {
        const getList =  await axios.post('http://103.75.26.78:8880/savehr/ws.countchat.php',body)
        console.log(getList.data,'js')
        setCountNotif(getList.data.data)
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
                <View style={styles.card}>
                    <Text style={styles.welcome}>
                        Welcome User !
                    </Text>
                    <TouchableOpacity onPress={()=>(navigation.navigate('List'))}>
                    <View style={styles.badge}>
                            <Text style={styles.notif}>{countNotif}</Text>
                        </View>
                    <Icon name='circle-notifications' size={50} color={'#FFF'}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.cardContainer}>
                    <TouchableOpacity style={styles.cardMenu} onPress={()=>(navigation.navigate('Add'))}>
                        <Icon name={'chat'} size={90} color='#FFF' />
                        <Text style={styles.textMenu}>Chat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cardMenu}>
                        <Icon name={'person-pin'} size={90} color='#FFF' />
                        <Text style={styles.textMenu}>Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cardMenu}>
                        <Icon name={'live-help'} size={90} color='#FFF' />
                        <Text style={styles.textMenu}>Help</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cardMenu}>
                        <Icon name={'support-agent'} size={90} color='#FFF' />
                        <Text style={styles.textMenu}>FAQ</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.refresh} onPress={getListChat}>
                <Icon name={'cached'} size={30} color='#FFF' />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        padding: 20,
    },
    card : {
        width: '100%',
        padding: 10,
        elevation: 10,
        backgroundColor: '#8AC6D0',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    welcome: {
        fontSize: 30,
        color: '#FFF'
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
        flexWrap: 'wrap'
    },
    cardMenu: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8AC6D0',
        height: 150,
        width: '45%',
        borderRadius: 10,
        marginVertical: 10
    },
    textMenu: {
        fontSize: 20,
        color: '#FFF'
    },
    badge: {
        backgroundColor: '#DF2935',
        position: 'absolute',
        zIndex: 99,
        right: 0,
        width: 22,
        height: 22,
        borderRadius: 20,
    },
    notif: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    refresh:{
        position: 'absolute',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8AC6D0',
        height: 60,
        width: 60,
        borderRadius: 100,
        marginVertical: 10,
        bottom: 10,
        right: 10
    }
})

export default Home