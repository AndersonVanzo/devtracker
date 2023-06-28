import { NavigatorScreenParams } from '@react-navigation/native';

export {};

declare global {
  type UserNavigationParamList = {
    ProfileScreen: { search: string; data?: UserData };
    RepositoresScreen: undefined;
  };

  type RootStackParamsList = {
    HomeScreen: undefined;
    UserNavigation: NavigatorScreenParams<UserNavigationParamList>;
  };

  namespace ReactNavigation {
    interface RootParamsList extends RootStackParamsList {}
  }
}
