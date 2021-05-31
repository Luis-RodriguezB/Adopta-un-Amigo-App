import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  ScrollView,
  TouchableOpacity,
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
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <Text style={styles.header}>Formulario de Adopción</Text>
      <View style={styles.subtittle}>
        <Text>
          Para continuar con el proceso de adopción, debes llenar el formulario
        </Text>
      </View>
      <View style={styles.tittle}>
        <View>
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
            placeholder="Escribe tu dirección"
            onChangeText={handleChange("direction")}
          />

          <Text>Descripción</Text>
          <TextInput
            style={styles.input}
            id="description"
            name="description"
            value={description}
            placeholder="Escribe una breve descripción"
            onChangeText={handleChange("description")}
          />
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleAdoptionSubmit}
          >
            <Text style={styles.textButton}>Adoptar</Text>
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
    margin: 10,
    height: 50,
    paddingLeft: 10,
    borderWidth: 1,
  },
  containerButton: {
    flex: 1,
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
    margin: 15,
    textAlign: "left",
    fontSize: 18,
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
});
