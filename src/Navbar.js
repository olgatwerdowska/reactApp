import React from 'react';
import  {View, Text, StyleSheet} from 'react-native';

export const Navbar = (props) =>{
    return(
        <View style={styles.navbar}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar:{
        height: 75,
        backgroundColor: "#3949ab",
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 10,
    },
    text:{
        color: 'white',
        fontSize: 20,
    }
})

