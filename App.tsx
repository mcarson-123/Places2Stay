import React from 'react';
import Text from './src/component/base/text/index';
import {
  SafeAreaView  
} from 'react-native';
import Home from './src/screen/Home';

const App: React.FC = () => {
  return (
    <SafeAreaView>
      <Home />
    </SafeAreaView>
  );
};

export default App;