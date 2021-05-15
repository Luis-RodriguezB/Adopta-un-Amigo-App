import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store/store";
import AppNavigator from "./src/navigation/index";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={{flex: 1, paddingTop: 40}}>
          <AppNavigator />
        </View>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
