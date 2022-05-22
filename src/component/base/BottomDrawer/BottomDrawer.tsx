import React, { useState, useRef } from 'react';

import {
    View,
    Text,
    Animated,
    Dimensions,
    StyleSheet,
    TouchableWithoutFeedback,
    PanResponder,
} from 'react-native';

const BottomDrawer: React.FC = ({
    children,
}) => {
    const { height } = Dimensions.get('window');
    const topPosition = height - 120;

    const [open, setOpen] = useState(false);

    const animateValue = useRef(new Animated.Value(0)).current;
    const [animateStyle, setAnimateStyle] = useState({});
    const interpolate = animateValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -400]
    });

    const onPress = () => {
        console.log("open", open);
        setAnimateStyle({transform: [{translateY: interpolate}]})
        const options = {
            toValue: open ? 0 : 1, 
            useNativeDriver: false, 
            duration: 500
        };
        console.log(options)

        open ? setOpen(false) : setOpen(true);

        Animated.timing(animateValue, options).start();
    }

    const pan = React.useRef(new Animated.ValueXY()).current;
    const panMover = Animated.event([
        null,
        {
            dx: pan.x,
            dy: pan.y,
        }
    ], {useNativeDriver: false});
    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
            pan.setOffset({
                x: pan.x._value,
                y: pan.y._value,
            });
        },
        onPanResponderMove: Animated.event([
            null,
            {
                dx: pan.x,
                dy: pan.y,
            }
        ], {useNativeDriver: false}),
        // onPanResponderMove: (e, gesture) => {
        //     if (pan.y._value < -542) {
        //         pan.setValue({x: 0, y: -524})
        //     }
        //     return panMover(e, gesture);
        // },
        onPanResponderRelease: () => {
            // check if open or closed and set state?
            pan.flattenOffset();
            console.log("pan y on release** ", pan.y);
        }
    })

    return(
        <Animated.View 
            style={[
                styles.container, 
                { top: topPosition }, 
                {transform: [{translateY: pan.y}]},
                animateStyle,
            ]}
            {...panResponder.panHandlers}
        >
            <TouchableWithoutFeedback onPress={onPress}>
                <View style={styles.pullBarContaier}>
                    <View style={styles.pullBar}/>
                </View>
            </TouchableWithoutFeedback>
            {children}
        </Animated.View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgrey',
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        position: 'absolute',
        height: 600,
        width: '100%',
        margin: 0,
    },
    pullBarContaier: {
        padding: 16,
        // backgroundColor: 'pink',
    },
    pullBar: {
        alignSelf: 'center',
        backgroundColor: 'black',
        borderRadius: 1,
        height: 3,
        width: 40,
        margin: 10,
    },
    contents: {

    }
});

export default BottomDrawer;