import React from "react";
import moment from "moment";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import AlternativeContent from "../../alternativeContentScreen";

const ActivitiesList = ({ data }) => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {data.length === 0 ? (
        <AlternativeContent message="En este momento no hay actividades programadas" />
      ) : (
        <View style={{ flex: 1 }}>
          <Text style={styles.tittle}>Actividades</Text>
          {data.map(({ name, activityDate, direction, description }, index) => {
            const activityDateFormat = new moment(activityDate).format(
              "DD/MM/YYYY HH:mm"
            );
            return (
              <View style={styles.container} key={index}>
                <View style={styles.cardContent}>
                  <View style={styles.header}>
                    <Text style={[styles.text, styles.activityName]}>
                      {name}
                    </Text>
                    <Text style={styles.text}>{activityDateFormat}</Text>
                  </View>
                  <View style={styles.contentText}>
                    <Text style={styles.text}>Descripción: {description}</Text>
                    <Text style={styles.text}>Dirección: {direction}</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      )}
    </ScrollView>
  );
};

export default ActivitiesList;

const styles = StyleSheet.create({
  container: {
    height: "25%",
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
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  activityName: {
    shadowColor: "#333",
    fontWeight: "bold",
    fontSize: 15,
  },
  cardContent: {
    flex: 1,
  },
  contentText: {
    flexShrink: 2,
    justifyContent: "space-between",
    alignContent: "center",
  },
  text: {
    lineHeight: 20,
    padding: 5,
  },
  tittle: {
    marginVertical: 15,
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 18,
    fontWeight: "700",
  },
});
