import axios from 'axios';

export const addProduct = (formData) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
            dispatch({ type: 'ADD_PRODUCT', payload: response.data });
        } catch (error) {
          dispatch({type: 'ERROR_PRODUCT', payload: error.message});

        }
    };
};