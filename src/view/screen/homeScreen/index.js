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

const Home = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={style.container}>
        <View style={{ flex: 3, margin: 0 }}>
          <ImageBackground source={perritos} style={style.image}>
            <Text style={style.tittle}>Adopta un amigo</Text>
          </ImageBackground>
          <Text style={style.textResume}>
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
      </View>
    </ScrollView>
  );
};
const style = StyleSheet.create({
  container: { flexGrow: 1, margin: 0 },
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
  textResume: {
    margin: 5,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
    fontSize: 16,
  },
  textContainer: { padding: 10, flexShrink: 2 },
  text: { fontSize: 16, marginBottom: 15, marginHorizontal: 5 },
});

export default Home;
