import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FilterThro from '../screens/FilterThro';
import JoinUs from '../screens/signup/JoinUs';
import OTPVerify from '../screens/OTPVerify';
import SignIn from '../screens/SignIn';
import Splash from '../screens/Splash';
import BottomNavHost from './bottomNav/BottomNavHost';
import CreateThroComplete from './bottomNav/createThro/CreateThroComplete';
import WhatAThro from './bottomNav/createThro/WhatAThro';
import Dashboard from './bottomNav/Dashboard';
import PersonalDetails from '../screens/signup/PersonalDetails';
import ProfileSetup from '../screens/signup/ProfileSetup';
import ChooseInterests from '../screens/signup/ChooseInterests';
import ThroDetails from '../screens/ThroDetails';

const AppNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={{flex: 1, marginTop: 0}}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{gestureDirection: 'horizontal'}}>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="JoinUs"
            component={JoinUs}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="OTPVerify"
            component={OTPVerify}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PersonalDetails"
            component={PersonalDetails}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ProfileSetup"
            component={ProfileSetup}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ChooseInterests"
            component={ChooseInterests}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ThroDetails"
            component={ThroDetails}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="FilterThro"
            component={FilterThro}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="BottomNavHost"
            component={BottomNavHost}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="CreateThroComplete"
            component={CreateThroComplete}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="WhatAThro"
            component={WhatAThro}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default AppNavigation;
