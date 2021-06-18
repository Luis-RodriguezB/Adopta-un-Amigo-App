import React from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import useDogsEffectById from "../../hooks/useDogsEffectById"; 

const Activities = ({ route, navigation }) => {
  const {
    params: { dogId },
  } = route;
  const { dog } = useDogsEffectById(dogId);

  const { id, name, race, color, age, description, image } = dog;
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }}  style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Nombre: {name}</Text>
          <Text style={styles.text}>Raza: {race}</Text>
          <Text style={styles.text}>Color: {color}</Text>
          <Text style={styles.text}>Edad: {age}</Text>
          <Text style={styles.text}>Descripción: {description}</Text>
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.button}           
            onPress={() =>
              navigation.navigate("FormAdoptionDog", { dogId: id })
            }
          >
            <Text style={styles.textButton}>Adoptar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Activities;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
  },
  imageContainer: {
    flex: 3,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    flexShrink: 2,
  },
  text: {
    fontSize: 16,
    padding: 5,
    marginVertical: 5,
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
