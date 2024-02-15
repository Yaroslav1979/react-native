import Registration from './src/screen/Auth/Registration/index';
import React, {useEffect} from 'react';
import {DevSettings, NativeModules, SafeAreaView} from 'react-native';

function App(): React.JSX.Element {
  useEffect(() => {
    if (__DEV__) {
      DevSettings.addMenuItem('Debugging With debugger', () => {
        NativeModules.DevSettings.setIsDebuggingRemotely(true);
      });
      DevSettings.addMenuItem('Stop Debugging With debugger', () => {
        NativeModules.DevSettings.setIsDebuggingRemotely(false);
      });
    }
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Registration />
    </SafeAreaView>
  );
}

export default App;
