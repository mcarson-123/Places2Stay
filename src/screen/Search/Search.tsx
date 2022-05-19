import React, {useState} from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    FlatList,
} from 'react-native';
import Text from '../../component/base/text/Text';
// import TextInput from './component/TextInput/TextInput';

// import SearchIcon from '../../assets/icons/search_icon.svg';
import SearchIcon from '../../component/base/icon/SearchIcon';

import searchMockData from './searchMockData';
import PlaceIcon from '../../component/base/icon/PlaceIcon';
import BackIcon from '../../component/base/icon/BackIcon';

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

const Search: React.FC = () => {
    const [input, setInput] = useState('');
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
                <FlatList
                    data={filterData(input)}
                    renderItem={({item}) => {
                        return(
                            <View style={styles.placeItem}>
                                <PlaceIcon height={32} width={32} color={'blue'}/>
                                <Text>{item}</Text>
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
    placeItem: {
        flexDirection: 'row',
        // justifyContent: 'flex',
        alignItems: 'center',
    },
});

export default Search;