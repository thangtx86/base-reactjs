import { useEffect, useState } from 'react';
import { api } from '../services';
import { API_KEY } from '../constains';

export const useFetch = ({ path, params }) => {
    const [state, setState] = useState({ loading: true, response: null });

    useEffect(() => {
        const config = { params };
        api.get(path, config)
            .then(({ data }) => setState({ response: data, loading: false }))
            .catch(() => setState({ loading: false }));
    }, []);

    return state;
};

export default useFetch;
