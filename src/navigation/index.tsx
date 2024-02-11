import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from '../screen/Auth/Login/index';
import Registration from '../screen/Auth/Registration/index';
import {ScreenNames} from '../constants/screenNames';

export type RootStack = {
  [ScreenNames.LOGIN_PAGE]: undefined;
  [ScreenNames.REGISTRATION_PAGE]: undefined;
};
const Stack = createNativeStackNavigator<RootStack>();
export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ScreenNames.LOGIN_PAGE}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={ScreenNames.LOGIN_PAGE} component={LoginPage} />
        <Stack.Screen
          name={ScreenNames.REGISTRATION_PAGE}
          component={Registration}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
