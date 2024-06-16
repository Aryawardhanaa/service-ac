import { useState } from "react";
// import { apiURL } from "../api";
import axios from "axios";


const useMutation = (apiURL) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const mutate = async (body) => {
        setIsLoading(true);

        try {
            const response = await axios.post(apiURL, body);
            // console.log(response.data);
            setData(response.data);
        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false);
        }
    }


    return { data, error, isLoading, mutate };
};


export default useMutation;