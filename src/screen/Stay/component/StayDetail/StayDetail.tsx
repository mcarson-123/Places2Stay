import React from 'react';

import {
    View,
    StyleSheet,
} from 'react-native';
import Text from '../../../../component/base/text';

type StayDetailProps = {
    description: string;
    item1: string;
    value1: string;
    item2: string;
    value2: string;
};

const StayDetail: React.FC<StayDetailProps> = ({
    description,
    item1,
    value1,
    item2,
    value2,
}) => {
    return(
        <View style={ styles.container }>
            <View style={styles.overlayText}>
                <Text styles={styles.text}>{description}</Text>
            </View>
            <View style={styles.ellipses}>
                <View style={styles.ellipsesDot}/>
                <View style={styles.ellipsesDot}/>
                <View style={styles.ellipsesDot}/>
            </View>
            <View style={styles.textContent}>
                <View style={styles.textContentRow}>
                    <Text>{item1}</Text>
                    <Text>{value1}</Text>
                </View>
                <View style={styles.textContentRow}>
                    <Text>{item2}</Text>
                    <Text>{value2}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        // marginHorizontal: 20,
        borderRadius: 8,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#E1DFD8',
    },
    ellipses: {
        position: 'absolute',
        right: 0,
        margin: 14,
        flexDirection: 'row',
    },
    ellipsesDot: {
        height: 4,
        width: 4,
        borderRadius: 2,
        margin: 1,
        backgroundColor: '#4169E1',
    },
    textContent: {
        marginTop: 30,
        marginBottom: 16,
        marginHorizontal: 40,
    },
    textContentRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    overlayText: {
        backgroundColor: '#4169E1',
        color: 'white',
        borderBottomRightRadius: 8,
        borderTopLeftRadius: 8,
        position: 'absolute',
        padding: 8,
    },
    text: {
        fontSize: 12,
        color: 'white'
    }
});

export default StayDetail;