import React from 'react';
import {SafeAreaView} from 'react-native';
import LoginPage from './src/screen/Auth/Login/index';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <LoginPage />
    </SafeAreaView>
  );
}

export default App;
