import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetDogById } from "../../redux/actions/dogsActions";
import { isIterableArray } from "../helper/isIterableArray";

const useDogsEffectById = (id) => {
    const dispatch = useDispatch();
    const [dog, setDog] = useState({});
    const [load, setLoad] = useState(false);
    const {dogs, loading, error} = useSelector((state) => state.dogsState);

    useEffect(() => {
        if (isIterableArray(dogs)) {
            const [dogToEdit = {}] = dogs.filter((item) => item.id === id);
            if (dogToEdit) {
                setDog(dogToEdit);
            }
        }else if (!load && id) {
            dispatch(GetDogById(id));
            setLoad(true);
        }
    }, [dogs, id, dispatch, load]);

    return {dog, loading, error};
};

export default useDogsEffectById;

