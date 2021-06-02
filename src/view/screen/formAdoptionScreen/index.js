import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { GetDogById } from "../../../redux/actions/dogsActions";
import { CreateAdoptionAction } from "../../../redux/actions/adoptionAction";

const FormAdoptionDog = ({ navigation, route }) => {
  const {
    params: { dogId },
  } = route;

  const [dog, setDog] = useState({});
  const dispatch = useDispatch();
  const { dogsState } = useSelector((state) => state);

  useEffect(() => {
    if (dogsState.dogs.length === 0) {
      dispatch(GetDogById(dogId));
    } else {
      const [dogById] = dogsState.dogs.filter((item) => item.id === dogId);
      setDog({ ...dogById });
    }
  }, [dogsState.dogs, dogId, dispatch]);

  const [adoption, setAdoption] = useState({
    name: "",
    lastName: "",
    telephone: "",
    email: "",
    direction: "",
    description: "",
    dogAdopt: "",
  });

  const handleChange = (name) => (value) => {
    setAdoption({
      ...adoption,
      [name]: value,
    });
  };

  useEffect(() => {
    dog && setAdoption({ ...adoption, dogAdopt: dog });
  }, [dog]);

  const handleAdoptionSubmit = () => {
    dispatch(CreateAdoptionAction(adoption));

    Alert.alert(
      "Solicitud Enviada",
      "Gracias por tu solicitud, nos contactaremos contigo lo más pronto posible.",
      [
        {
          text: "Ok",
          onPress: () => navigation.popToTop(),
          style: "cancel",
        },
      ]
    );

    setAdoption({
      name: "",
      lastName: "",
      telephone: "",
      email: "",
      direction: "",
      description: "",
      dogAdopt: "",
    });
  };

  const { name, lastName, telephone, email, direction, description } = adoption;

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor: "white" }}
    >
      <View style={styles.form}>
        <View style={{flex: 2}}>
          <Text style={styles.header}>Formulario de Adopción</Text>
          <Text style={styles.subtittle}>
            Para continuar con el proceso de adopción, debes llenar el
            formulario
          </Text>

          <Text>Nombre</Text>
          <TextInput
            style={styles.input}
            id="name"
            name="name"
            value={name}
            placeholder="Escribe tu nombre"
            onChangeText={handleChange("name")}
          />

          <Text>Apellidos</Text>
          <TextInput
            style={styles.input}
            id="lastName"
            name="lastName"
            value={lastName}
            placeholder="Escribe tus apellidos"
            onChangeText={handleChange("lastName")}
          />

          <Text>Teléfono</Text>
          <TextInput
            style={styles.input}
            id="telephone"
            name="telephone"
            keyboardType="numeric"
            maxLength={8}
            value={telephone}
            placeholder="Escribe tu teléfono"
            onChangeText={handleChange("telephone")}
          />

          <Text>Correo eléctronico</Text>
          <TextInput
            style={styles.input}
            is="email"
            name="email"
            value={email}
            placeholder="Escribe tu correo eléctronico"
            onChangeText={handleChange("email")}
          />

          <Text>Dirección</Text>
          <TextInput
            style={styles.input}
            id="direction"
            name="direction"
            value={direction}
            multiline={true}
            numberOfLines={3}
            placeholder="Escribe tu dirección"
            onChangeText={handleChange("direction")}
          />

          <Text>Descripción</Text>
          <TextInput
            style={styles.input}
            id="description"
            name="description"
            value={description}
            multiline={true}
            numberOfLines={5}
            placeholder="Escribe una breve descripción"
            onChangeText={handleChange("description")}
          />
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleAdoptionSubmit}
          >
            <Text style={styles.textButton}>Enviar solicitud</Text>
          </TouchableOpacity>
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
    marginTop: 5,
    marginBottom: 15,
    height: 50,
    paddingLeft: 5,
    textAlign: "left",
    alignItems: "center",
    borderWidth: 1,
  },
  containerButton: {
    flex: 1,
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  header: {
    margin: 15,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
  },
  subtittle: {
    fontSize: 14,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#00D27A",
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 2,
  },
  textButton: {
    color: "#FFF",
    fontSize: 16,
  },
  form: {
    flex: 1,
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 10,
  },
});
