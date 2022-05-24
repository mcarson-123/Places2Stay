import React from 'react';

import {
    Pressable,
    Text,
    View,
    StyleSheet,
} from 'react-native';

type ButtonProps = {
    text: string;
    onPress(): void;
};

const Button: React.FC<ButtonProps> = ({
    text,
    onPress,
}) => {
    return(
        <Pressable style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        minWidth: 120,
        alignSelf: 'center',
        height: 48,
        padding: 16,
        backgroundColor: '#4169E1',
        borderRadius: 8,
    },
    text: {
        color: 'white',
        fontSize: 16,
        alignSelf: 'center',
    }
});

export default Button;