import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import dogImage from "../../../assets/dogPiss.png";

const AlternativeContent = ({message}) => {
  return (
    <View style={styles.container}>
      <Image source={dogImage} style={styles.img} />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

export default AlternativeContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    padding: 10,
  },
  img: {
    height: 200, 
    width: 200
  },
  text: {
    fontSize: 18,
    textAlign: "center"
  }
});
