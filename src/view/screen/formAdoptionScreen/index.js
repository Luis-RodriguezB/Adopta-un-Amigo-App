import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text
  } from "react-native";

const FormAdoptionDog = () => {
  return (
    <View style={styles.tittle}>
      <Text>Nombre</Text>
      <View>
      <TextInput placeholder="Nombre" />
      <TextInput placeholder="Primer apellido" />
      <TextInput placeholder="Segundo apellido" />
      <TextInput placeholder="Teléfono" />
      <TextInput placeholder="Correo eléctronico" />
      <TextInput placeholder="Dirección" />
    </View>
    </View>
  );
};


export default FormAdoptionDog;

const styles = StyleSheet.create({
  tittle: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "#FFF",
  },
});