import React, {useState} from 'react';

import {
    View,
    TextInput as RNTextInput,
    StyleSheet,
} from 'react-native';

type TextInputProps = {

};

const TextInput: React.FC<TextInputProps> = ({
}) => {

    const [input, setInput] = useState('');
    console.log("STATE** ", input, setInput);
    return(
        <View style={styles.container}>
            <RNTextInput
                style={styles.input}
                placeholder='Where are you going?'
                onChangeText={setInput}
                value={input}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

    },
    input: {
        
    },
});

export default TextInput;