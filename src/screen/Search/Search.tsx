import React, {useState} from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    FlatList,
    Pressable,
    Text,
} from 'react-native';
// import Text from '../../component/base/text/Text';
// import TextInput from './component/TextInput/TextInput';

// import SearchIcon from '../../assets/icons/search_icon.svg';
import SearchIcon from '../../component/base/icon/SearchIcon';

import {NavigationProp} from '@react-navigation/native';

import searchMockData from './searchMockData';
import PlaceIcon from '../../component/base/icon/PlaceIcon';
import BackIcon from '../../component/base/icon/BackIcon';
import BottomDrawer from '../../component/base/BottomDrawer';

const filterData = (input: string) => {
    const citiesList = searchMockData.cities;
    if (!input || input == "") {
        return citiesList;
    }

    const results = citiesList.filter((item) => {
        return item.toLowerCase().includes(input.toLowerCase());
    })
    return results;
}

type SearchProps = {
    navigation: NavigationProp<any, any>;
}

const Search: React.FC<SearchProps> = ({navigation}) => {
    const [input, setInput] = useState('');
    const [selectedToggle, setSelectedToggle] = useState(0);

    return(
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <BackIcon height={32} width={32}/>
                <TextInput 
                    style={styles.searchInput}
                    placeholder='Where are you going?'
                    onChangeText={setInput}
                    value={input}
                />
            </View>
            <View style={styles.searchResults}>
                <Text style={styles.heading}>Getaways Near You</Text>
                <FlatList
                    data={filterData(input)}
                    renderItem={({item}) => {
                        return(
                            <View style={styles.placeItem}>
                                <PlaceIcon height={32} width={32} color={'blue'}/>
                                <Pressable 
                                    onPress={() => {
                                        navigation.navigate('SearchPlace', {place: item})}
                                    }
                                >
                                    <Text>{item}</Text>
                                </Pressable>
                            </View>
                        );
                    }}
                    keyExtractor={item => item}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    searchBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchInput: {
        padding: 18,
        marginLeft: 8,
        width: 230,
        borderWidth: 1,
        borderRadius: 100,
        fontSize: 16,
    },
    searchResults: {
        fontSize: 16,
    },
    heading: {
        fontSize: 32,
    },
    placeItem: {
        flexDirection: 'row',
        // justifyContent: 'flex',
        alignItems: 'center',
    },
});

export default Search;