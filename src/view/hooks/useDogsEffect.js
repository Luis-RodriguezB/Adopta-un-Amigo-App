import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetDogs } from '../../redux/actions/dogsActions';

const useDogsEffect = () => {
    const dispatch = useDispatch();
    const { dogsState } = useSelector((state) => state);
    const isRequesting = dogsState.loading;
    const dogs = dogsState.dogs;
    const error = dogsState.error;
    useEffect(() => {
        dispatch(GetDogs());
    }, [dispatch]);

    return { dogs, isRequesting, error};
};

export default useDogsEffect;