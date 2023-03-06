import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';



export default function Button(props) {
    return(
        <TouchableOpacity style={styles.container} onPress={props.click}>
            <Text style={styles.label}>{props.label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: 100,
        backgroundColor: '#8AC6D0',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#B8F3FF',
        padding: 5,
        alignSelf:'center',
        justifyContent: 'center',
        elevation: 10,
        marginTop: 20
    },
    label: {
        fontSize: 15,
        marginBottom: 5,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFF'
    }
})