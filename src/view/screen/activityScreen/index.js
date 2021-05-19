import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ActivitiesList from "./ActivitiesList";
import { GetActivities } from "../../../redux/actions/activityActions";
import Spinner from "../../layout/spinner";

const Activities = ({navigation}) => {
  const dispatch = useDispatch();
  const { activitiesState } = useSelector((state) => state);

  useEffect(() => {
    dispatch(GetActivities());
  }, [dispatch]);

  return (
    <View style={{ flex: 1 }}>
      {activitiesState.loading ? (
        <Spinner />
      ) : (
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <ActivitiesList navigation={navigation} data={activitiesState.activities} />
        </ScrollView>
      )}
    </View>
  );
};

export default Activities;
