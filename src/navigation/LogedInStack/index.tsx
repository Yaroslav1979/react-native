import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenNames} from '../../constants/screenNames';
import {LoggedInStackType} from '../types';
import DrawerStack from '../DrawerStack';

const Stack = createNativeStackNavigator<LoggedInStackType>();

export default function LoggedInStack() {
  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.DRAWER_STACK}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ScreenNames.DRAWER_STACK} component={DrawerStack} />
    </Stack.Navigator>
  );
}
