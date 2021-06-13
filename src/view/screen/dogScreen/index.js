import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import DogList from "./DogsList";
import { GetDogs } from "../../../redux/actions/dogsActions";
import Spinner from "../../layout/spinner";

const Dogs = ({navigation}) => {
  const dispatch = useDispatch();
  const { dogsState } = useSelector((state) => state);

  useEffect(() => {
    dispatch(GetDogs());
  }, [dispatch]);

  return (
    <View style={{ flex: 1 }}>
      {dogsState.loading ? (
        <Spinner />
      ) : (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <DogList navigation={navigation} data={dogsState.dogs} />
        </ScrollView>
      )}
    </View>
  );
};

export default Dogs;
