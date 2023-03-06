import React from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';


const chat = [
    {id: 1 , username: 'ridwan', message: 'hai', status: 'sent', isMe: true},
    {id: 2 , username: 'ainul', message: 'hai juga', status: 'sent', isMe: false},
]

const Item = ({title, message, isMe}) => (
    <View style={ isMe ? styles.chatBubbleMe : styles.chatBubbleUser}>
    <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );


const ChatRoom = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
            <FlatList
                data={chat}
                renderItem={({item}) => <Item title={item.username} message={item.message} isMe={item.isMe}/>}
                keyExtractor={item => item.id}
            />
            </View>
            <View style={styles.containerTextInput}>
                <TextInput placeholder='ketik disini'/>
                <Icon name={"send-circle"} size={40} color={'#8AC6D0'} />
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
        alignSelf: 'center'
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
    }
})

export default ChatRoom