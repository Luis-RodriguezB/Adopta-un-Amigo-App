import React from "react";
import Route from "../constants/Routes";
import HomeScreen from "../view/screen/homeScreen";
import DogsScreen from "../view/screen/dogScreen";
import DogsList from "../view/screen/dogScreen/DogsList";
import IndividualDog from "../view/screen/dogScreen/IndividualDog";
import ActivitiesScreen from "../view/screen/activityScreen";
import FormAdoptionScreen from "../view/screen/formAdoptionScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const DogNavigator = createStackNavigator();

export const DogNavigatorScreen = () => {
  return (
    <DogNavigator.Navigator>
      <DogNavigator.Screen options={{ headerShown: false}} name={Route.Dogs} component={DogsScreen}/>
      <DogNavigator.Screen options={{ headerShown: false}} name={Route.DogsList} component={DogsList}/>
      <DogNavigator.Screen options={{ headerShown: false}} name={Route.IndividualDog} component={IndividualDog}/>
      <DogNavigator.Screen options={{ headerShown: false}} name={Route.FormAdoptionDog} component={FormAdoptionScreen}/>
    </DogNavigator.Navigator>
  );
};

const BottomNavigator = createMaterialBottomTabNavigator();

export const FooterNavigator = () => {
  return (
    <BottomNavigator.Navigator
      initialRouteName={Route.Home}
      activeColor="#000000"
      inactiveColor="#FFFFFF"
    >
      <BottomNavigator.Screen
        name={Route.Dogs}
        component={DogNavigatorScreen}
        options={{
          title: "Perros",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="dog" color={color} size={26} />
          ),
        }}
      />
      <BottomNavigator.Screen
        name={Route.Home}
        component={HomeScreen}
        options={{
          title: "Inicio",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <BottomNavigator.Screen
        name={Route.Activities}
        component={ActivitiesScreen}
        options={{
          title: "Actividades",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={26} />
          ),
        }}
      />
    </BottomNavigator.Navigator>
  );
};
