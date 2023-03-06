import React, { useState } from 'react';
import { Alert, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import bg from './login3.jpg';
import logo from './16.png';
import Input from './Component/Input';
import Button from './Component/Button';
import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const onPressLogin = () => {
        // const body = {
        //     email : username,
        //     password : password,
        // }
        // try {
        //     const login = await axios.post('http://l.cloudkejaksaan.my.id:4000/api/login',body)
        //     console.log(login,'login')
        //     if (login.status === 200){
        //         Alert.alert('Login Berhasil')
        //         navigation.navigate('Home');
        //     }
        // }catch(e){
        //     console.log(e,'error')
        //     Alert.alert('Login Tidak Berhasil')
        // }
       navigation.navigate('Home')
        
    }

    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.container} source={bg} resizeMode={'stretch'} resizeMethod={'auto'}>
                <ScrollView>
                    <View style={styles.content}>
                        <Text style={styles.title}>EXAMPLE CHAT</Text>
                        <Image source={logo} style={styles.logo}/>
                        <View style={styles.card}>
                        <Text style={styles.title}>LOGIN</Text>
                            <Input 
                                label={'Username'} 
                                iconName={'v-card'} 
                                placeholder={'Masukkan username'}
                                onChange={(a)=>setUsername(a)}/>
                            <Input 
                                label={'Password'} 
                                iconName={'key'} 
                                placeholder={'Masukkan password'}
                                onChange={(a)=>setPassword(a)}/>
                            <Button label={'SIGN IN'} click={onPressLogin}/>
                        </View>
                    </View>
                </ScrollView>
                <Text style={styles.textFooter}>Example-Chat-2023@Ridwan</Text>
            </ImageBackground>
        </SafeAreaView>
    
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    content: {
        padding: 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        color: '#000'
    },
    logo:{
        width: 200,
        height: 200,
        borderRadius: 100,
        alignSelf: 'center',
        marginVertical: 5
    },
    card: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'rgba(255,255,255,0.8)',
        marginVertical: 20,
    },
    textFooter: {
        position: 'absolute',
        bottom: 20,
        color: '#000',
        alignSelf: 'center'
    }
})

export default Login