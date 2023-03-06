import React from 'react'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons'



const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.card}>
                    <Text style={styles.welcome}>
                        Welcome User !
                    </Text>
                    <View>
                    <View style={styles.badge}>
                            <Text style={styles.notif}>0</Text>
                        </View>
                    <Icon name='circle-notifications' size={50} color={'#FFF'}/>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <TouchableOpacity style={styles.cardMenu} onPress={()=>(navigation.navigate('List'))}>
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
    }
})

export default Home