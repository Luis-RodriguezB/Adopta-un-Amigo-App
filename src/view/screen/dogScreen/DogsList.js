import React from "react";
import { Button } from "native-base";
import { Image, StyleSheet, View, Text } from "react-native";

const DogList = ({ data, navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.tittle}>Perros en adopción</Text>
      {data.map(({id, name, race, age, img }, index) => {
        return (
          <View style={styles.container} key={index}>
            <View style={styles.cardContentImg}>
              <Image source={{ uri: img }} style={styles.image} />
            </View>
            <View style={styles.cardContent}>
              <View style={styles.contentText}>
                <Text style={styles.text}>Nombre: {name}</Text>
                <Text style={styles.text}>Raza: {race}</Text>
                <Text style={styles.text}>Edad: {age}</Text>
              </View>
              <View style={styles.contentButton}>
                <Button
                  transparent
                  textStyle={{ color: "#87838B" }}
                  style={{
                    padding: 0,
                    maring: 0,
                    marginTop: 25,
                    marginRight: 5,
                  }}
                  onPress={() => navigation.navigate('IndividualDog', { dogId: id })}
                >
                  <Text>Ver más...</Text>
                </Button>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default DogList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 6,
    marginVertical: 6,
    padding: 5,
  },
  image: {
    width: "100%",
    height: 200,
  },
  cardContentImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContent: {
    flex: 1,
  },
  contentText: {
    marginLeft: 10,
    justifyContent: "flex-end",
    flex: 2,
  },
  text: {
    lineHeight: 25,
  },
  contentButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "baseline",
  },
  tittle: {
    margin: 15,
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 18,
    fontWeight: "700",
  },
});
