import React from "react";
import { StyleSheet, View } from "react-native";

const Card = () => {
  return <View style={styles.container}></View>;
};
const CardContentImg = () => {
    return <View style={styles.cardContentImg}></View>;
  };
const CardContent = () => {
    return <View style={styles.cardContent}></View>;
  };

export {Card, CardContentImg, CardContent};

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
  cardContentImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContent: {
    flex: 1,
  },
});
