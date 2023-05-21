import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { result, isEmpty } from 'lodash';
import axios from 'axios';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Entypo';
import Geolocation from '@react-native-community/geolocation';
import Input from './Component/Input';
import Button from './Component/Button';


const FormAbsen = (props) => {
    const [user, setUser] = useState([]);
    const [infoLoc, setLoc] = useState();

    const chat = [
        {id: 1 , username: 'Customer A', message: 'hai', status: 'sent', datetime: '04-02-2023 10:48', isMe: true},
        {id: 2 , username: 'Customer B', message: 'hai juga', status: 'sent', datetime: '04-02-2023 10:49', isMe: false},

        ]

        const getListChat = async () => {
            const getUser = await AsyncStorage.getItem('username')
           setUser(getUser)
           await Geolocation.getCurrentPosition(async (info) => {
            const body = {
                page: 'login',
                token: 'CHAT!@#$%',
                username : getUser,
                long: info.coords.longitude,
                lat: info.coords.latitude
            }
            const getList =  await axios.post('http://103.75.26.78:8880/savehr/ws.longlat.php',body)
            setLoc(info)
          });
        }
        
    
        useEffect(()=> {
            getListChat();
        },[])

        const onPressAbsen = async () => {
            const options = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }};
            const requestBody = new FormData();
            requestBody.append('fileToUpload', {
                uri:  props.route.params.photo.uri,
                name: `${moment().format('YYYY-MM-DD HH:mm:ss:SS')}.jpeg`,
                type: 'image/jpeg'
            });
            requestBody.append('usernamefoto',user);
            requestBody.append('long',infoLoc.coords.longitude);
            requestBody.append('lat', infoLoc.coords.latitude);
            try{
                const getList =  await axios.post('http://103.75.26.78:8880/savehr/ws.uploadfoto.php',requestBody,options)
                if(getList.status === 200){
                    Alert.alert('Absen Berhasil')
                    props.navigation.goBack();
                }
                console.log(requestBody, getList,'absen')
            }catch(e){
                console.log(e,'error')
            }
           
           
        }

    return (
       <View style={styles.container}>
           <View style={styles.content}>
               <View style={styles.card}>
               <TouchableOpacity style={styles.imageContainer} onPress={()=> props.navigation.navigate('Camera')} >
                        {
                            isEmpty(props.route.params) ? (
                                <Icons name='image' size={70}/>
                            ) : (
                                <Image style={styles.icon} source={{uri: props.route.params.photo.uri}} />
                            )
                        }
                        
                    </TouchableOpacity>
                    {/* <Icon name='account-box' size={100} style={styles.capture} /> */}
                    <Input value={user} edit={false} label={'Username'}/>
                    <Button label={'Absen'} click={onPressAbsen}/>
               </View>
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
    },
    capture: {
        alignSelf: 'center',
        marginVertical: 10,
    },
    card :{
        width: '100%',
        minHeight: 400,
        backgroundColor: '#FFF',
        borderRadius: 10,
        paddingHorizontal: 10,
        elevation: 10
    },
    images: {
        alignSelf:'center',
    },
    photo: {
        alignSelf:'center',
        width: 200,
        height:200,
        marginVertical: 10,
    },
    imageContainer: {
        alignSelf: 'center',
        width: 200,
        height: 200,
        borderWidth: 1,
        borderColor: '#000',
        marginBottom:  20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 20,
        elevation: 10
    },
    icon: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
})

export default FormAbsen