import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Pressable,
} from 'react-native';

import {NavigationProp, RouteProp} from '@react-navigation/native';
import { SearchBarProps } from 'react-native-screens';
import SearchHeader from '../../component/base/SearchHeader';

type SearchPlaceProps = {
    navigation: NavigationProp<any, any>
    route: RouteProp<{params: {place: string}}>;
}

const SearchPlace: React.FC<SearchPlaceProps> = ({ route, navigation }) => {
    const {place} = route.params;
    return(
        <View>
            <SearchHeader title={place} onPress={() => {navigation.goBack()}}/>
            <Pressable onPress={() => {
                navigation.navigate('SearchCalendar', {place: place})
            }}>
                <Text>Find a place to stay</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

    },
});

export default SearchPlace;