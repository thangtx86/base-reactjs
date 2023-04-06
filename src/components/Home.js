import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onChangeEmail } from '../actions';
import { useFetch } from '../hooks';
import { API_KEY } from '../constains';

const Home = (props) => {
    const dispatch = useDispatch();

    const { response, loading } = useFetch({
        path: 'movie/popular',
        params: { api_key: API_KEY }
    });

    return (
        <div>
            <h1>Welcome to my app</h1>
        </div>
    );
};

export default Home;
