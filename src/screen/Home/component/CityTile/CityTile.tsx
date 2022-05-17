import React from 'react';

import {
    Image,
    View,
    StyleSheet,
} from 'react-native';

import Text from '../../../../component/base/text/Text';

type CityTileProps = {
    image: number;
    cityName: string;
};

const CityTile: React.FC<CityTileProps> = ({
    image, cityName
}) => {

    return(
        <View style={styles.container}>
            <Image style={styles.image} source={image}/>
            <Text>{cityName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    image: {
        height: 160,
        width: 120,
        borderRadius: 8,
        marginBottom: 6,
    },
    text: {
        fontSize: 12,
    }
});

export default CityTile;