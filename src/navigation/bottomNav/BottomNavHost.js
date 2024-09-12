import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Profile";
import { Image, Text, View } from "react-native";
import Dashboard from "./Dashboard";
import Chat from "./Chat";
import CreateThro from "./createThro/CreateThro";
import Activity from "./Activity";
import Profile from "./Profile";
import { grey, primaryColor } from "../../theme/Colors";
import NavHomeIcon from "../../assets/svgs/NavHomeActiveIcon";
import NavHomeActiveIcon from "../../assets/svgs/NavHomeActiveIcon";
import NavHomeInactiveIcon from "../../assets/svgs/NavHomeInactiveIcon";
import NavChatsActiveIcon from "../../assets/svgs/NavChatsActiveIcon";
import NavChatsInactiveIcon from "../../assets/svgs/NavChatsInactiveIcon";
import NavProfileActiveIcon from "../../assets/svgs/NavProfileActiveIcon";
import NavProfileInactiveIcon from "../../assets/svgs/NavProfileInactiveIcon";
import NavActivityActiveIcon from "../../assets/svgs/NavActivityActiveIcon";
import NavActivityInactiveIcon from "../../assets/svgs/NavActivityInactiveIcon";
import NavCreateActiveIcon from "../../assets/svgs/NavCreateActiveIcon";
import NavCreateInactiveIcon from "../../assets/svgs/NavCreateInactiveIcon";

const Tab = createBottomTabNavigator();

export default function BottomNavHost(){
    return(
    
      <Tab.Navigator
        headerStyle={{
          height:80
        }}
        initialRouteName="Chat"
        screenOptions={{
          tabBarStyle: { height: 60},
          tabBarLabelStyle:{marginBottom:5,fontSize:12.5,fontWeight:'500'},
          tabBarActiveTintColor: primaryColor,
          tabBarInactiveTintColor:grey,
          headerShown:false,
        }}
        >
        <Tab.Screen name='Dashboard' component={Dashboard} options={{
          tabBarIcon: ({focused}) => {
            return (
              focused ? <NavHomeActiveIcon/>:
              <NavHomeInactiveIcon/>
            );
          },

        }} />
        <Tab.Screen name='Chats' component={Chat} options={{
          tabBarIcon: ({focused}) => {
            return (
              focused ? <NavChatsActiveIcon/>:
              <NavChatsInactiveIcon/>
            );
          },

        }} />

       <Tab.Screen name='Create' component={CreateThro}
          options={{
          tabBarStyle: { display: 'none' },
          tabBarIcon: ({focused}) => {
            return (
              focused ? <NavCreateActiveIcon/>:
              <NavCreateInactiveIcon/>
            );
          },

        }} />

        
        <Tab.Screen name='Activity' component={Activity} options={{
          tabBarIcon: ({focused}) => {
            return (
              focused ? <NavActivityActiveIcon/>:
              <NavActivityInactiveIcon/>
            );
          },

        }} />
       
        <Tab.Screen name='Profile' component={Profile} options={{
          tabBarIcon: ({focused}) => {
            return (
              focused ? <NavProfileActiveIcon/>:
              <NavProfileInactiveIcon/>
            );
          },

        }} />
       
       
      </Tab.Navigator>
    
    )
}