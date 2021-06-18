import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import store from "./src/redux/store/store";
import {FooterNavigator} from "./src/navigation";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={{ flex: 1, paddingTop: 40}}>
          <FooterNavigator />
        </View>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
