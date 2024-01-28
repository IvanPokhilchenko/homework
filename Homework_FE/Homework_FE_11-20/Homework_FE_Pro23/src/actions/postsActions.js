import axios from "axios";

export const getPosts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
        );
      dispatch({ type: "POSTS_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "POSTS_ERROR", payload: error.message });
    }
  };
};

export const deletePost = (postId) => {
  return async (dispatch) => {
    try{
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      dispatch({type: "DELETE_SUCCESS", payload: postId});
    } catch(error) {
      dispatch({type: "DELETE_ERROR", payload: error.message});
    }
  };
};