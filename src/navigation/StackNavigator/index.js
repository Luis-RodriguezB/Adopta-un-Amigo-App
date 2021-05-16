import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import IndividualDog from '../../view/screen/dogScreen/IndividualDog';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={IndividualDog}/>
    </Stack.Navigator>
  );
};

export default StackNavigator;
