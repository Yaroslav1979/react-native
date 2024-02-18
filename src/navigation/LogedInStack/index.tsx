import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenNames} from '../../constants/screenNames';
import {LoggedInStackType} from '../types';
import TabBarStack from '../TabBarStack';

const Stack = createNativeStackNavigator<LoggedInStackType>();

export default function LoggedInStack() {
  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.TAB_BAR_STACK}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ScreenNames.TAB_BAR_STACK} component={TabBarStack} />
    </Stack.Navigator>
  );
}
