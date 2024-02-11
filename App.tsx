import React from 'react';
import {SafeAreaView} from 'react-native';
import Registration from './src/screen/Auth/Registration/index';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Registration />
    </SafeAreaView>
  );
}

export default App;
