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

const MAX_VAL = -450;

const BottomDrawerBothGestures: React.FC = ({
    children,
}) => {
    const { height } = Dimensions.get('window');
    const topPosition = height - 120;

    const [open, setOpen] = useState(false);

    const animation = useRef(new Animated.ValueXY()).current;
    const [offset, setOffset] = useState(0);
    const animatedStyle = {
    transform: [...animation.getTranslateTransform()]
    }

    const animateValue = useRef(new Animated.Value(0)).current;
    const [animateStyle, setAnimateStyle] = useState({});
    const [isAnimating, setIsAnimating] = useState(false);
    const [animViewStyle, setAnimViewStyle] = useState({});
    const interpolate = animateValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -400]
    });

    const onPress = () => {
        console.log("open", open);
        // setIsAnimating(true);
        // setAnimateStyle({transform: [{translateY: interpolate}]})
        setAnimViewStyle({transform: [{translateY: interpolate}]});
        const options = {
            toValue: open ? 0 : 1, 
            useNativeDriver: false, 
            duration: 500
        };
        console.log(options)

        open ? setOpen(false) : setOpen(true);

        Animated.timing(animateValue, options).start(({finished}) => {
            // setIsAnimating(false);
        });
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
            setAnimViewStyle(animatedStyle);
            // pan.setOffset({
            //     x: pan.x._value,
            //     y: pan.y._value,
            // });
        },
        // onPanResponderMove: Animated.event([
        //     null,
        //     {
        //         dx: pan.x,
        //         dy: pan.y,
        //     }
        // ], {useNativeDriver: false}),
        onPanResponderMove: (e, gesture) => {
            // if (pan.y._value < -542) {
            //     pan.setValue({x: 0, y: -524})
            // }
            // setIsAnimating(false);
            // setAnimViewStyle({transform: [{translateY: pan.y}]});
            // return panMover(e, gesture);
            const newVal = offset + gesture.dy < MAX_VAL ? MAX_VAL : offset + gesture.dy;
            animation.setValue({x: 0, y: newVal})
        },
        onPanResponderStart: () => {
            console.log("pan responder start**");
            // setAnimViewStyle({transform: [{translateY: pan.y}]});
        },
        onPanResponderRelease: (e, gesture) => {
            // check if open or closed and set state?
            // setIsAnimating(false);
            // pan.flattenOffset();
            // console.log("pan y on release** ", pan.y);
            const newVal = offset + gesture.dy < MAX_VAL ? MAX_VAL : offset + gesture.dy;
            setOffset(newVal);
        },
        onPanResponderEnd: () => {
            // setIsAnimating(true);
        }
    })

    console.log('isAnimating*** ', isAnimating);

    return(
        <Animated.View 
            style={[
                styles.container, 
                { top: topPosition }, 
                // isAnimating && animateStyle,
                // animatedStyle,
                // animViewStyle,
                // animViewStyle,
                // !isAnimating && {transform: [{translateY: pan.y}]},
                animViewStyle,
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

export default BottomDrawerBothGestures;