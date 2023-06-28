import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home/home';
import Profile from '../screens/user/profile/profile';
import Repositores from '../screens/user/repositores/repositores';

const MainStack = createNativeStackNavigator<RootStackParamsList>();
const UserStack = createNativeStackNavigator<UserNavigationParamList>();

const UserRoutes = () => {
  return (
    <UserStack.Navigator initialRouteName={'ProfileScreen'} screenOptions={{ headerShown: false }}>
      <UserStack.Screen name={'ProfileScreen'} component={Profile} />
      <UserStack.Screen name={'RepositoresScreen'} component={Repositores} />
    </UserStack.Navigator>
  );
};

const Routes = () => {
  return (
    <MainStack.Navigator initialRouteName={'HomeScreen'} screenOptions={{ headerShown: false }}>
      <MainStack.Screen name={'HomeScreen'} component={Home} />
      <MainStack.Screen name={'UserNavigation'} component={UserRoutes} />
    </MainStack.Navigator>
  );
};

export default Routes;
