import React from 'react';

import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import {NavigationProp, RouteProp} from '@react-navigation/native';
import { SearchBarProps } from 'react-native-screens';
import Button from '../../component/base/Button';
import MinimalButton from '../../component/base/MinimalButton';
import Toggle from '../../component/base/Toggle';
import SearchHeader from '../../component/base/SearchHeader';

type SearchCalendarProps = {
    navigation: NavigationProp<any, any>;
    route: RouteProp<{params: {place: string}}>;
}

const SearchCalendar: React.FC<SearchCalendarProps> = ({ route, navigation }) => {
    const [activeView, setActiveView] = React.useState(0); // 0:calendar or 1:flexible
    const onTogglePress = (value: number) => {
        setActiveView(value);
    };

    const {place} = route.params;
    return(
        <View style={styles.container}>
            <SearchHeader title={place} onPress={() => {navigation.goBack()}}/>
            <Text>Place: {place}</Text>
            <Toggle 
                text1='Calendar'
                text2="I'm flexible"
                onPress={onTogglePress}
            />
            {activeView === 0 && <Text>Calendar goes here</Text>}
            {activeView === 1 && <Text>Flexible date picker goes here</Text>}
            <View style={styles.footer}>
                <MinimalButton text='Skip' onPress={() => {navigation.navigate('Home', {place: place})}}/> 
                <Button text="Next" onPress={()=> {navigation.navigate('SearchWho', {place: place})}}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // margin: 32,
    },
    header: {

    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

export default SearchCalendar;