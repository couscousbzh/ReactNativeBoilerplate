import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

//No State !!!
const Button = (props) => {
    const { buttonStyle, textStyle, containerStyle } = styles;
    return (
        <View style={containerStyle}>
            <TouchableOpacity style={buttonStyle} onPress={props.onPress}>
                <Text style={textStyle}>{props.children}</Text>
            </TouchableOpacity>
        </View >
    );
};

const styles = {
    containerStyle: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row'
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        marginTop: 10,
        marginBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
    }
};

export { Button };
