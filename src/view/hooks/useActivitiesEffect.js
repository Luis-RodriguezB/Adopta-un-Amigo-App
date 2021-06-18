import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetActivities } from '../../redux/actions/activityActions';

const useActivitiesEffect = () => {
    const dispatch = useDispatch();
    const { activitiesState } = useSelector((state) => state);
    const isRequesting = activitiesState.loading;
    const activities = activitiesState.activities;
    const error = activitiesState.error;
    useEffect(() => {
        dispatch(GetActivities());
    }, [dispatch]);

    return { activities, isRequesting, error };
};

export default useActivitiesEffect;