import {IPets} from '../../screen/Home';

export type LoggedOutStackType = {
  LOGIN_PAGE: undefined;
  REGISTRATION_PAGE: undefined;
};
export type DrawerStackType = {
  TAB_BAR_STACK: undefined;
};
export type LoggedInStackType = {
  DRAWER_STACK: undefined;
  FILTERS_SETTINGS_PAGE: {
    petsList: IPets[];
  };
};
export type TabBarStackType = {
  HOME_PAGE: {
    settings: {
      sortByTime: boolean;
      selectedAnimal: boolean;
      selectedSex: 'male' | 'female';
      size: 'big' | 'small' | 'medium';
      age: string;
      isVaccinate: boolean;
    };
  };
  FAVORITE_PAGE: undefined;
};

const LoggedOutStackScreens: LoggedOutStackType = {
  LOGIN_PAGE: undefined,
  REGISTRATION_PAGE: undefined,
};
const LoggedInStackScreens: DrawerStackType = {
  TAB_BAR_STACK: undefined,
};
export type RootStackNavigation = {
  LOGGED_IN_STACK: {screens?: keyof typeof LoggedInStackScreens};
  LOGGED_OUT_STACK: {screens?: keyof typeof LoggedOutStackScreens};
};
