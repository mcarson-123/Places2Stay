import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Search from "../Search";
import SearchPlace from "../SearchPlace";
import {
    Pressable,
    Text,
} from 'react-native';
import SearchCalendar from "../SearchCalendar";
import SearchWho from "../SearchWho";

import { getHeaderTitle } from '@react-navigation/elements';
const { Navigator, Screen } = createNativeStackNavigator();
import {RouteProp} from '@react-navigation/native';
import SearchHeader from "../../component/base/SearchHeader";

type SearchNavigatorProps = {
    options: any,
    route: RouteProp<{params: {place: string}}>;
}

const SearchNavigator: React.FC<SearchNavigatorProps> = ({route, options}) => {
    // const headerTitle = getHeaderTitle(options, route.name)
    return(
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="Search" component={Search} key="Search"/>
            <Screen 
                name="SearchPlace"
                component={SearchPlace}
                key="SearchPlace"
                // options={({navigation, route}) => ({
                //     headerShown: true,
                // look at transitions to remove them for a more seamless look  
                //     title: "",
                //     headerLeft: () => (
                //         <SearchHeader title={route.params?.place || ""} onPress={() => {navigation.goBack()}}/>
                //     ),
                // })}

            />
            <Screen 
                name="SearchCalendar"
                component={SearchCalendar}
                key="SearchCalendar"
                // options={({navigation, route}) => ({
                //     headerShown: true,
                //     title: "",
                //     headerLeft: () => (
                //         <SearchHeader title={route.params?.place || ""} onPress={() => {navigation.goBack()}}/>
                //     ),
                // })}

            />
             <Screen 
                name="SearchWho"
                component={SearchWho}
                key="SearchWho"
                // options={({navigation}) => ({
                //     headerShown: true,
                //     title: "",
                //     headerLeft: () => (
                //         <Pressable onPress={() => navigation.goBack()}>
                //             <Text>{"<-"}</Text>
                //         </Pressable>
                //     ),
                // })}

            />
        </Navigator>
    )
};

export default SearchNavigator;