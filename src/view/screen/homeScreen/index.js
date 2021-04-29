import React from "react";
import { Text, View } from "native-base";

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{fontFamily: 'Salsa-Regular'}} >Inicio</Text>
    </View>
  );
};

export default Home;
