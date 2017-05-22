import React from 'react';
import { View, Text, TextInput } from 'react-native';

//No State !!!
const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>{label}</Text>
            <TextInput
                style={styles.inputText}
                value={value}
                onChangeText={onChangeText} 
                autoCorrect={false}
                placeholder={placeholder}   
                secureTextEntry={secureTextEntry}        
            />
        </View>
    );
};

const styles = {

    inputText: {
        color: '#000',
        marginRight: 25,
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    inputLabel: {
        fontSize: 18,
        paddingLeft: 25,
        flex: 1,        
    },
    inputContainer: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }

};

export { Input };
