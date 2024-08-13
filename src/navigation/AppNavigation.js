import { NavigationContainer } from "@react-navigation/native"
import { SafeAreaView, View } from "react-native"

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Splash from "../screens/Splash";
import JoinUs from "../screens/JoinUs";
import SignIn from "../screens/SignIn";
import OTPVerify from "../screens/OTPVerify";
import Dashboard from "../screens/Dashboard";


const AppNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (<SafeAreaView style={{ flex: 1, marginTop: 0 }}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Dashboard" screenOptions={{gestureDirection:'horizontal'}} >
                <Stack.Screen
                    name="Splash"
                    component={Splash}
                    options={{ headerShown: false }}/>
                <Stack.Screen
                    name="JoinUs"
                    component={JoinUs}
                    options={{ headerShown: false }}/>
                <Stack.Screen
                    name="OTPVerify"
                    component={OTPVerify}
                    options={{ headerShown: false }}/>
                <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                    options={{ headerShown: false }}/>
                <Stack.Screen
                    name="Dashboard"
                    component={Dashboard}
                    options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaView>)
}

export default AppNavigation