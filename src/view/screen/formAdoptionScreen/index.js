import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  ScrollView,
  Button,
} from "react-native";

const FormAdoptionDog = () => {
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <Text style={styles.header}>Formulario de Adopción</Text>
      <View style={styles.subtittle}>
      <Text>Para continuar con el proceso de adopción, debes llenar el formulario</Text>
      </View>
      <View style={styles.tittle}>
        <View>
          <Text>Nombre</Text>
          <TextInput style={styles.input} placeholder="Escribe tu nombre" />
          <Text>Primer apellido</Text>
          <TextInput
            style={styles.input}
            placeholder="Escribe tu primer apellido"
          />
          <Text>Segundo apellido</Text>
          <TextInput
            style={styles.input}
            placeholder="Escribe tu segundo apellido"
          />
          <Text>Teléfono</Text>
          <TextInput style={styles.input} placeholder="Escribe tu Teléfono" />
          <Text>Correo eléctronico</Text>
          <TextInput
            style={styles.input}
            placeholder="Escribe tu correo eléctronico"
          />
          <Text>Dirección</Text>
          <TextInput style={styles.input} placeholder="Escribe tu dirección" />
          <Text>Descripción</Text>
          <TextInput
            style={styles.input}
            placeholder="Escribe una breve descripción"
          />
        </View>
        <View style={styles.contentButton}>
          <Button
            style={{
              color: "#fff",
            }}
          >
            <Text>Enviar</Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default FormAdoptionDog;

const styles = StyleSheet.create({
  tittle: {
    margin: 10,
    height: 75,
    paddingLeft: 10,
    fontWeight: "bold",
  },
  input: {
    borderColor: "lightgrey",
    margin: 10,
    height: 50,
    paddingLeft: 10,
    borderWidth: 1,
  },
  contentButton: {
    backgroundColor: "green",
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 30
  },
  header: {
    margin: 15,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
  },
  subtittle: {
    margin: 15,
    textAlign: "left",
    fontSize: 18,
  },
});
