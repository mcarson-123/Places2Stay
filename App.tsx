import React from 'react';
import Text from './src/component/base/text/index';
import {
  SafeAreaView  
} from 'react-native';
import Home from './src/screen/Home';
import Stay from './src/screen/Stay';
import Search from './src/screen/Search';
import EmptyScreen from './src/screen/EmptyScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalendarIcon from './src/component/base/icon/CalendarIcon';
import HouseIcon from './src/component/base/icon/HouseIcon';
import SearchIcon from './src/component/base/icon/SearchIcon';

const {Navigator, Screen} = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
        {/* <Home /> */}
        {/* <Stay /> */}
        {/* <Search /> */}
        {/* <EmptyScreen/> */}
        <Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused}) => {
              // let iconName;
              if(route.name === 'Home') {
                const color = focused ? 'black' : '#666';
                return <HouseIcon color={color} height={24} width={24}/>
              } else if (route.name === 'Stay') {
                const color = focused ? 'black' : '#666';
                return <CalendarIcon color={color} height={24} width={24}/>
              } else if (route.name === 'Search') {
                const color = focused ? 'black' : '#666';
                return <SearchIcon color={color} height={24} width={24} />
              }
            },
            tabBarActiveTintColor: 'lightGrey',
            tabBarInactiveTintColor: 'grey',
            headerShown: false,
            tabBarShowLabel: false,
          })}
        >
          <Screen name="Home" component={Home} key="Home"/>
          <Screen name="Stay" component={Stay} key="Stay"/>
          <Screen name="Search" component={Search} key="Search"/>
        </Navigator>
    </NavigationContainer>
  );
};

export default App;