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

const BottomDrawerDrag: React.FC = ({
    children,
}) => {
    const { height } = Dimensions.get('window');
    const topPosition = height - 120;

    const animation = useRef(new Animated.ValueXY()).current;
    const [offset, setOffset] = useState(0);

    // const pan = React.useRef(new Animated.ValueXY()).current;
    // const panMover = Animated.event([
    //     null,
    //     {
    //         dx: pan.x,
    //         dy: pan.y,
    //     }
    // ], {useNativeDriver: false});

    const animatedStyle = {
        transform: [...animation.getTranslateTransform()]
      }

    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
            console.log("granted");
            // pan.setOffset({
            //     x: pan.x._value,
            //     y: pan.y._value < -542 ? -542 : pan.y._value,
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

            const newVal = offset + gesture.dy < MAX_VAL ? MAX_VAL : offset + gesture.dy;
            animation.setValue({x: 0, y: newVal})
            // console.log("aaand we're moving** ");
            // console.log("PAN Y", pan.y)
        
            // if (pan.y._value < -542) {
            //     console.log("too high");
            //     pan.setValue({x: 0, y: -542})
            //     const newValue = new Animated.ValueXY({x: 0, y: -542})
            //     return Animated.event([
            //         null,
            //         {
            //             dx: pan.x,
            //             dy: pan.y,
            //         }
            //     ], {useNativeDriver: false})(e, {dx: gesture.dx, dy: -542});

            // }

            // return Animated.event([
            //         null,
            //         {
            //             dx: pan.x,
            //             dy: pan.y,
            //         }
            //     ], {useNativeDriver: false})(e, gesture);

            // // if swiping down allow it

        },
        onPanResponderRelease: (e, gesture) => {
            // // check if open or closed and set state?
            // pan.flattenOffset();
            // animation.flattenOffset()
            const newVal = offset + gesture.dy < MAX_VAL ? MAX_VAL : offset + gesture.dy;
            setOffset(newVal);
            // console.log("pan y on release** ", pan.y);
        }
    })



    return(
        <Animated.View 
            style={[
                styles.container, 
                { top: topPosition }, 
                animatedStyle
            ]}
            {...panResponder.panHandlers}
        >
            <View style={styles.pullBarContaier}>
                <View style={styles.pullBar}/>
            </View>
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

export default BottomDrawerDrag;