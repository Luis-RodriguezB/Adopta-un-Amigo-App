import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { GetDogById } from "../../../redux/actions/dogsActions";

const Activities = ({ route, navigation }) => {
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

  const { id, name, race, color, age, description, img } = dog;

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: img }} style={styles.image} />
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Nombre: {name}</Text>
        <Text style={styles.text}>Raza: {race}</Text>
        <Text style={styles.text}>Color: {color}</Text>
        <Text style={styles.text}>Edad: {age}</Text>
        <Text style={styles.text}>Descripción: {description}</Text>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("FormAdoptionDog", {dogId: id})}
        >
          <Text style={styles.textButton}>Adoptar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Activities;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 3,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 2,
  },
  text: {
    fontSize: 16,
    padding: 5,
    marginHorizontal: 10,
  },
  containerButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
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
