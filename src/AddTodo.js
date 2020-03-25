import React, {useState} from "react";
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native';
import Text from "react-native-web/dist/exports/Text";

export const AddTodo = ({ onSubmit }) => {

    const[value, setValue] = useState(' ');
    const pressHandler = () => {

        if(value.trim()) {
            onSubmit(value)
            setValue(" ")
        }else{
            Alert.alert('Name can`t be empty')
        }

    }
    return(
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                placeholder="Add your task"
                value={value}
                autoCorrect={false}

            />
            <Button title= 'Dodać' onPress={pressHandler} style={styles.button}/>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection : 'row',
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        width: '70%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor : '#3949ab',
        padding: 2
    },
    button: {
        backgroundColor: '#3949ab'
    }

})