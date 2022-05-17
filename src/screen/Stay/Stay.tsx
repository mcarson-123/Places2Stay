import React from 'react';

import {
    View,
    StyleSheet,
    Image,
} from 'react-native';

import Text from '../../component/base/text/Text';
import StayDetail from './component/StayDetail';

const Stay: React.FC = () => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require('./placeholder.jpg')}/>
            <View style={styles.stayContent}> 
                <View style={styles.stayInfo}>
                    <Text styles={styles.headingText}>408 St. Jacques | 1 Br</Text> 
                    <Text styles={styles.subheadingText}>Old Montreal, Montreal</Text>
                    <Text styles={styles.subheadingText}>Oct.29, 2021 - Oct.31, 2021</Text>
                </View>
                <StayDetail 
                    description='Access Codes'
                    item1='Building'
                    value1='8393'
                    item2='Apartment'
                    value2='12312'
                />
                <StayDetail 
                    description='wifi'
                    item1='Name'
                    value1='Catscatscats'
                    item2='Password'
                    value2='ilovecats'
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF1D2',
        height: '100%',
    },
    stayContent: {
        margin: 16,
    },
    image: {
        resizeMode: 'cover',
        width: '100%',
        height: 220,
        borderBottomRightRadius: 16,
    },
    stayInfo: {
        marginBottom: 12,
    },
    headingText: {
        fontSize: 24,
        paddingBottom: 8,
    },
    subheadingText: {
        fontSize: 12,
        color: '#858585',
        paddingBottom: 8,
    },
});

export default Stay;