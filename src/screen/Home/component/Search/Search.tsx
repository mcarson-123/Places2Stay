import React from 'react';

import {
    View,
    StyleSheet,
} from 'react-native';

import Text from '../../../../component/base/text/Text';


type SearchProps = {

};

const Search: React.FC<SearchProps> = ({

}) => {
    return(
        <View style={styles.container}>
            <Text styles={styles.text}>Try 'Victoria'</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        backgroundColor: 'white',
        margin: 32,
        padding: 12,
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: '400',
        color: '#858585',
    }
});

export default Search;