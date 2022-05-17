import React from 'react';

import {
    View,
    StyleSheet,
    Image,
} from 'react-native';

import Text from '../../../../component/base/text';

// const placeholder = require('./placeholder.jpg');
// console.log("placeholder** ", placeholder);

type PlaceCtaProps = {
    image: number;
    imageLabel: string;
    address?: string;
    location?: string;
};

const PlaceCta: React.FC<PlaceCtaProps> = ({
    image,
    imageLabel,
    address,
    location,
}) => {


    return(
        <View>
            <Image style={ styles.image } source={image} />
            <Text styles={ styles.imageLabel }>{imageLabel}</Text>
            <Text styles={ styles.address }>{address}</Text>
            <Text styles={styles.location} >{location}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        resizeMode: 'cover',
        width: '100%',
        height: 200,
        alignSelf: 'center',
        borderRadius: 8,
        marginBottom: 8,
    },
    imageLabel: {
        position: 'absolute',
        zIndex: 1,
        right: 0,
        backgroundColor: '#FFA500',
        padding: 8,
        fontSize: 12,
        flex: 1,
        justifyContent: 'center',
        borderBottomLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    address: {
        fontSize: 12,
        marginBottom: 4,
    },
    location: {
        fontSize: 12,
        color: '#858585',
    },
});

export default PlaceCta;