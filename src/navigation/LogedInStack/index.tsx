import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenNames} from '../../constants/screenNames';
import Home from '../../screen/Home';
import {LoggedInStackType} from '../types';

const Stack = createNativeStackNavigator<LoggedInStackType>();

export default function LoggedInStack() {
  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.HOME_PAGE}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ScreenNames.HOME_PAGE} component={Home} />
    </Stack.Navigator>
  );
}
