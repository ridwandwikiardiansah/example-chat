import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { map } from 'lodash';


const ListChat = ({navigation}) => {

    const chat = [
        { username: 'Ridwan', message: 'Hai' },
        { username: 'Ainul', message: 'Wan, lu dimna?' },

        ]
    

    return (
       <View style={styles.container}>
           <View style={styles.content}>
               <ScrollView>
                   {
                       map(chat, (i,index) => (
                        <TouchableOpacity style={styles.card} key={index} onPress={()=>navigation.navigate('ChatRoom')}>
                            <Text style={styles.username}>{i.username}</Text>
                            <Text numberOfLines={1}>{i.message}</Text>
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
    }
})

export default ListChat