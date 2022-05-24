import React from "react";

import {
    Pressable,
    StyleSheet,
    Text,
} from 'react-native';

type MinimalButtonType = {
    text: string;
    onPress(): void;
};

const MinimalButtonType: React.FC<MinimalButtonType> = ({
    text,
    onPress,
}) => {
    return(
        <Pressable style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
    },
    text: {
        textDecorationLine: 'underline',
        fontSize: 16,
    }
});

export default MinimalButtonType;