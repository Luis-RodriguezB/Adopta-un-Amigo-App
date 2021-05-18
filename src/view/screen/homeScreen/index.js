import React from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from "react-native";
import perritos from "../../../../assets/imag.jpg";
import information from "./components/information";
import Contact from "./components/contacts";

const Home = () => {
  return (
      <ScrollView contentContainerStyle={{flex:1}}>
        <View style={{ flex: 3, margin: 0 }}>
          <ImageBackground source={perritos} style={style.image}>
            <Text style={style.tittle}>Adopta un amigo</Text>
          </ImageBackground>
          <Text
            style={{
              margin: 5,
              paddingRight: 10,
              paddingLeft: 10,
              paddingTop: 10,
              fontSize: 16,
            }}
          >
            Somos una organización sin fines de lucro que buscar rescatar y
            darles un hogar a los perros de la calle en la zona de Liberia.
          </Text>
        </View>
        <View style={style.textContainer}>
          {information.map((item, index) => {
            return (
              <Text style={style.text} key={index}>
                {item.name}: {item.description}
              </Text>
            );
          })}
        </View>
      </ScrollView>
  );
};
const style = StyleSheet.create({
  container: { flex: 1, margin: 0 },
  image: {
    flex: 1,
    resizeMode: "stretch",
    alignItems: "center",
    justifyContent: "center",
  },
  tittle: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "#FFF",
  },
  textContainer: { padding: 10, flex: 1 },
  text: { fontSize: 16, margin: 5 },
});

export default Home;
