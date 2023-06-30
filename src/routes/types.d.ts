import { NavigatorScreenParams } from '@react-navigation/native';

export {};

declare global {
  type UserNavigationParamList = {
    ProfileScreen: { search: string };
    RepositoresScreen: undefined;
  };

  type RootStackParamsList = {
    HomeScreen: undefined;
    RepositoryScreen: { userName: string; repositoryName: string };
    UserNavigation: NavigatorScreenParams<UserNavigationParamList>;
  };

  namespace ReactNavigation {
    interface RootParamsList extends RootStackParamsList {}
  }
}
