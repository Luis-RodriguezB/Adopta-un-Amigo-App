import React from "react";
import { Text, View } from "native-base";

const Activities = ({route}) => {
  console.log(route)
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Actividad individual</Text>
    </View>
  );
};

export default Activities;