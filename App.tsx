import React from 'react';
import Text from './src/component/base/text/index';
import {
  SafeAreaView  
} from 'react-native';
import Home from './src/screen/Home';
import Stay from './src/screen/Stay';
import Search from './src/screen/Search';
import SearchNavigator from './src/screen/SearchNavigator';
import SearchPlace from './src/screen/SearchPlace';
import EmptyScreen from './src/screen/EmptyScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CalendarIcon from './src/component/base/icon/CalendarIcon';
import HouseIcon from './src/component/base/icon/HouseIcon';
import SearchIcon from './src/component/base/icon/SearchIcon';
import SearchHeader from './src/component/base/SearchHeader';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabScreen = () => {
  return(
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          // let iconName;
          if(route.name === 'Home') {
            const color = focused ? 'black' : '#666';
            return <HouseIcon color={color} height={24} width={24}/>
          } else if (route.name === 'Stay') {
            const color = focused ? 'black' : '#666';
            return <CalendarIcon color={color} height={24} width={24}/>
          };
        },
        tabBarActiveTintColor: 'lightGrey',
        tabBarInactiveTintColor: 'grey',
        headerShown: false,
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} key="Home"/>
      <Tab.Screen name="Stay" component={Stay} key="Stay"/>
    </Tab.Navigator>
  );
}

const App: React.FC = () => {
  return (
    <NavigationContainer>
        {/* <Home /> */}
        {/* <Stay /> */}
        {/* <Search /> */}
        {/* <EmptyScreen/> */}
      <Stack.Navigator>
        <Stack.Group> 
          <Stack.Screen name='Tab' component={TabScreen} key='Tab'/>
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: 'modal', headerShown: false }}>
          <Stack.Screen 
            name="SearchNavigator" 
            component={SearchNavigator} 
            key="SearchNavigator"
          //   options={({navigation, route}) => ({
          //     headerShown: true,
          //     title: "",
          //     headerLeft: () => (
          //         <SearchHeader title={route.params?.place || ""} onPress={() => {navigation.goBack()}}/>
          //     ),
          // })}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;