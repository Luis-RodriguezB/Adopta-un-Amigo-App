import React from "react";
import {
  ScrollView,
  Text,
  View,
  ImageBackground,
  StyleSheet,
  SafeAreaView
} from "react-native";
import perritos from "../../../../assets/imag.jpg";

const Home = () => {
  return (
    <SafeAreaView style={{flex:1}}>
    <ScrollView style={{ flexGrow:1, height:"100%"}}>
      <View style={style.container}>
        <ImageBackground
          source={perritos}
          style={{ flex: 3, resizeMode: "stretch" }}
        >
          <Text
            style={{
              fontFamily: "Salsa-Regular",
              textAlign: "center",
              fontSize: 30,
            }}
          >
            Inicio
          </Text>
        </ImageBackground>
        <View style={{ flex: 1 }}>
          <Text>Tati</Text>
        </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  container: { flex: 1, flexDirection: "column" },
});

export default Home;
