import React from "react";
import { View } from "react-native";
import ActivitiesList from "./ActivitiesList";
import Spinner from "../../layout/spinner";
import useActivitiesEffect from "../../hooks/useActivitiesEffect";

const Activities = ({navigation}) => {
  const { activities, isRequesting } = useActivitiesEffect();
  return (
    <View style={{ flex: 1 }}>
      {isRequesting ? <Spinner /> : <ActivitiesList navigation={navigation} data={activities} />}
    </View>
  );
};

export default Activities;
