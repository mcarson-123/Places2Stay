import React from "react";

import {
    View, 
    Text,
    StyleSheet,
    Pressable,
} from 'react-native';

import BackIcon from '../icon/BackIcon';

type SearchHeaderType = {
    title: string;
    onPress(): void;
};

const SearchHeader: React.FC<SearchHeaderType> = ({
    title,
    onPress,
}) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => onPress()}>
                <BackIcon width={24} height={24}/>
            </Pressable>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.spacer}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 32,
        justifyContent: 'space-between'
    },
    title: {
        alignSelf: 'center',
        fontSize: 16,
    },
    button: {

    },
    spacer: {
        width: 24,
    }
});

export default SearchHeader;