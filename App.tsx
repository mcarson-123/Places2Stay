import React from 'react';
import Text from './src/component/base/text/index';
import {
  SafeAreaView  
} from 'react-native';
import Home from './src/screen/Home';
import Stay from './src/screen/Stay';
import Search from './src/screen/Search';

const App: React.FC = () => {
  return (
    <SafeAreaView>
      {/* <Home /> */}
      {/* <Stay /> */}
      <Search />
    </SafeAreaView>
  );
};

export default App;