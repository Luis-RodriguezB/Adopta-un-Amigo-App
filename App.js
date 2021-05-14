import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store/store";
import AppNavigator from './src/navigation/index';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
    </Provider>
  );
}
 
export default App;
