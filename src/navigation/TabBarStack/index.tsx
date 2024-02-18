import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Favorite from '../../screen/Favorite/index';
import {ScreenNames} from '../../constants/screenNames';
import Home from '../../screen/Home';
import {TabBarStackType} from '../types';
import getTabOptions from './options';

const Tab = createBottomTabNavigator<TabBarStackType>();
export default function TabBarStack() {
  return (
    <Tab.Navigator
      initialRouteName={ScreenNames.HOME_PAGE}
      screenOptions={({route}) => getTabOptions(route)}>
      <Tab.Screen name={ScreenNames.HOME_PAGE} component={Home} />
      <Tab.Screen name={ScreenNames.FAVORITE_PAGE} component={Favorite} />
    </Tab.Navigator>
  );
}
