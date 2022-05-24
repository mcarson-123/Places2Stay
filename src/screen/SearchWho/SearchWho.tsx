import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Pressable,
} from 'react-native';
import Button from '../../component/base/Button';

import {NavigationProp, RouteProp} from '@react-navigation/native';
import SearchHeader from '../../component/base/SearchHeader';

type SearchWhoProps = {
    navigation: NavigationProp<any, any>;
    route: RouteProp<{params: {place: string}}>;
}

const SearchWho: React.FC<SearchWhoProps> = ({ route, navigation }) => {
    const {place} = route.params;
    return(
        <View>
            <SearchHeader title={place} onPress={() => {navigation.goBack()}}/>
            <Text>Who's coming?</Text>
            <Button text="Find Places" onPress={()=> {navigation.navigate('Home', {place: place})}}/>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SearchWho;