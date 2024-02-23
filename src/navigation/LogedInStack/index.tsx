import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenNames} from '../../constants/screenNames';
import {LoggedInStackType} from '../types';
import DrawerStack from '../DrawerStack';
import FilterSettings from '../../screen/FilterSettings';
import SettingsHeader from '../../common/components/SettingsHeader';
import PetPage from '../../screen/PetPage';
import Languages from '../../screen/Languages';
import WebPage from '../../screen/WebPage';

const Stack = createNativeStackNavigator<LoggedInStackType>();

export default function LoggedInStack() {
  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.DRAWER_STACK}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ScreenNames.DRAWER_STACK} component={DrawerStack} />
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <SettingsHeader />,
        }}
        name={ScreenNames.FILTERS_SETTINGS_PAGE}
        component={FilterSettings}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={ScreenNames.PET_PAGE}
        component={PetPage}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={ScreenNames.LANGUAGES_PAGE}
        component={Languages}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={ScreenNames.WEB_PAGE}
        component={WebPage}
      />
    </Stack.Navigator>
  );
}
