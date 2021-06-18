import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { CreateAdoptionAction } from "../../../redux/actions/adoptionAction";
import useDogsEffectById from "../../hooks/useDogsEffectById";
import { emptyField, validateEmail } from '../../helper/formValidate';

const FormAdoptionDog = ({ navigation, route }) => {
  const {
    params: { dogId },
  } = route;
  const dispatch = useDispatch();
  const { dog } = useDogsEffectById(dogId);
  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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

    if (emptyField(adoption)) {
      setErrorMessage("Todos los campos son obligatorios");
      setError(true);
      return;
    }

    if (validateEmail(adoption.email)) {
      setErrorMessage("Debe de ser un email válido");
      setEmailError(true);
      return;
    }
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

  if (error || emailError) {
    setTimeout(() => {
      setEmailError(false);
      setError(false);
    }, 5000);
  }

  const { name, lastName, telephone, email, direction, description } = adoption;

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor: "white" }}
    >
      <View style={styles.form}>
        <View style={{ flex: 2 }}>
          <Text style={[styles.header, styles.centerText]}>Formulario de Adopción</Text>
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
            maxLength={30}
            placeholder="Escribe tu nombre"
            onChangeText={handleChange("name")}
          />

          <Text>Apellidos</Text>
          <TextInput
            style={styles.input}
            id="lastName"
            name="lastName"
            value={lastName}
            maxLength={100}
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
            keyboardType="email-address"
            value={email}
            maxLength={50}
            placeholder="Escribe tu correo eléctronico"
            onChangeText={handleChange("email")}
          />
          {emailError && <Text style={[styles.textError, styles.marginText]}>{errorMessage}</Text>}

          <Text>Dirección</Text>
          <TextInput
            style={styles.input}
            id="direction"
            name="direction"
            value={direction}
            multiline={true}
            numberOfLines={3}
            maxLength={100}
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
            maxLength={100}
            placeholder="Escribe una breve descripción"
            onChangeText={handleChange("description")}
          />
        </View>
        {error && <Text style={[styles.textError, styles.centerText]}>{errorMessage}</Text>}
        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleAdoptionSubmit}
          >
            <Text style={[styles.textButton, styles.centerText]}>Enviar solicitud</Text>
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
  textError: {
    color: "red",
    fontWeight: "bold",
    fontSize: 14
  },
  centerText: {
    textAlign: "center"
  },
  marginText: {
    marginBottom: 10
  }
});
