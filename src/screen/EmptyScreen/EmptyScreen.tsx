import React from 'react';

import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import BottomDrawer from '../../component/base/BottomDrawer';
import BottomDrawerDrag from '../../component/base/BottomDrawerDrag';

const EmptyScreen: React.FC = () => {
    return (
        <View>
            <View style={styles.container}>
                <Text>This is some screen content</Text>
            </View>
            {/* <BottomDrawerDrag>
                <View>
                    <Text>This is some drawer content</Text>
                    <Text>This is some MORE drawer content</Text>
                    <Text>And even more</Text>
                </View>
            </BottomDrawerDrag> */}
            <BottomDrawer>
                <View>
                    <Text>This is some drawer content</Text>
                    <Text>This is some MORE drawer content</Text>
                    <Text>And even more</Text>
                </View>
            </BottomDrawer>
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
        height: '100%',
        width: '100%',
    }
});

export default EmptyScreen;