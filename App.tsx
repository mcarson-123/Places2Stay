import React from 'react';
import Text from './src/component/base/text/index';
import {
  SafeAreaView  
} from 'react-native';
import Home from './src/screen/Home';
import Stay from './src/screen/Stay';
import Search from './src/screen/Search';
import EmptyScreen from './src/screen/EmptyScreen';

const App: React.FC = () => {
  return (
    <SafeAreaView>
      {/* <Home /> */}
      {/* <Stay /> */}
      {/* <Search /> */}
      <EmptyScreen/>
    </SafeAreaView>
  );
};

export default App;