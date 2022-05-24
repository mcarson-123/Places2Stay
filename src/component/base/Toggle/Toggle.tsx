import React, { useState, useRef } from 'react';

import {
    View,
    Text,
    Animated,
    StyleSheet,
    Pressable,
} from 'react-native';

type ToggleProps = {
    text1: string;
    text2: string;
//     selected: number,
//     setSelected: any,
};

// TODO:
// QUESTIONS: 
// Q1: How can you know how big to make the white pill depending on the length of the text?
// Q2: How can you know how much to move the white pill on the toggle 
// (or possibly better question: does the white pill need to be resized based on the content in the other option?)
// might be useful: https://thewebdev.info/2022/02/16/how-to-get-the-size-of-a-view-in-react-native/

const Toggle: React.FC<ToggleProps> = ({
    text1,
    text2,
}) => {
    // const onSelect = (option: number) => {
    //     setSelected(option);
    // };
    // const onSelect0 = () => {
    //     onSelect(0)
    // };
    // const onSelect1 = () => {
    //     onSelect(1)
    // };

    const animateValue = useRef(new Animated.Value(0)).current;
    const [animateStyle, setAnimateStyle] = useState({});

    const interpolate = animateValue.interpolate({
        inputRange: [0,1],
        outputRange: [0, 80]
    })

    const [selected, setSelected] = useState(0);
    const onSelect0 = () => {
        console.log('selecting 0')
        if (selected == 1) {
            setSelected(0);
            setAnimateStyle({transform: [{translateX: interpolate}]})
            const options = {toValue: 0, useNativeDriver: false, duration: 500};
            Animated.timing(animateValue, options).start();
        }
    };
    const onSelect1 = () => {
        console.log('selecting 1')
        setSelected(1);
        if (selected == 0) {
            setSelected(1);
            setAnimateStyle({transform: [{translateX: interpolate}]})
            const options = {toValue: 1, useNativeDriver: false, duration: 500};
            Animated.timing(animateValue, options).start();
        }
    };

    return(
        <View style={styles.container}>
            <Animated.View style={[styles.selectedWidget, animateStyle]}>
            </Animated.View>
            <View style={styles.toggleOptions}>
                <View style={styles.toggleItem}>
                    <Pressable  onPress={onSelect0}>
                    <Text style={selected == 0 && styles.selectedText}>{text1}</Text>
                    </Pressable>
                </View>
                <View style={styles.toggleItem}>
                    <Pressable onPress={onSelect1}>
                        <Text style={selected == 1 && styles.selectedText}>{text2}</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgrey',
        borderRadius: 25,
        padding: 4,
        alignSelf: 'center',
    },
    toggleOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    toggleItem: {
        margin: 12,
    },
    selectedWidget: {
        backgroundColor: 'white',
        borderRadius: 20,
        position: 'absolute',
        height: '80%',
        width: '25%',
        margin: 8,
    },
    selectedText: {
        fontWeight: 'bold',
    }
});

export default Toggle;