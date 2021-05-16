import React from "react";
import Route from "../../constants/Routes";
import HomeScreen from "../../view/screen/homeScreen";
import DogsScreen from "../../view/screen/dogScreen";
import ActivitiesScreen from "../../view/screen/activityScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const { Navigator, Screen } = createMaterialBottomTabNavigator();

const FooterNavigator = () => {
  return (
    <Navigator
      initialRouteName={Route.Home}
      activeColor="#000000"
      inactiveColor="#FFFFFF"
    >
      <Screen
        name={Route.Dogs}
        component={DogsScreen}
        options={{
          title: "Perros",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="dog" color={color} size={26} />
          ),
        }}
      />
      <Screen
        name={Route.Home}
        component={HomeScreen}
        options={{
          title: "Inicio",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Screen
        name={Route.Activities}
        component={ActivitiesScreen}
        options={{
          title: "Actividades",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={26} />
          ),
        }}
      />
    </Navigator>
  );
};

export default FooterNavigator;
