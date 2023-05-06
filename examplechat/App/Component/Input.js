import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default function Input(props) {
    return(
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>
            <View style={styles.inputContainer}>
            <TextInput 
                style={styles.input} 
                onChangeText={props.onChange} 
                placeholder={props.placeholder}
                value={props.value}
                editable={props.edit}
                secureTextEntry={props.password}/>
                <Icon style={styles.icon}  name={props.iconName} size={15} color={'#FFF'}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height: 80
    },
    label: {
        fontSize: 15,
        marginBottom: 5,
        fontWeight: 'bold',
        marginTop: 5
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: '100%',
        backgroundColor: '#8AC6D0',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#B8F3FF',
        padding: 5,
        elevation: 10,
    },
    icon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        color: '#FFF'
    },
})