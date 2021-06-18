import React from "react";
import { ScrollView, View } from "react-native";
import DogList from "./DogsList";
import Spinner from "../../layout/spinner";
import useDogsEffect from "../../hooks/useDogsEffect";

const Dogs = ({navigation}) => {
  const { dogs, isRequesting } = useDogsEffect();
  return (
    <View style={{ flex: 1 }}>
      {isRequesting ? <Spinner />: <DogList navigation={navigation} data={dogs} />}
    </View>
  );
};

export default Dogs;
