const initialState = {
  posts: [],
  error: null,
};

export const postsReducer = (state = initialState, action) => {
  switch(action.type) {
    case "POSTS_SUCCESS":
      return {
        posts: action.payload,
        error: null,
      };
    case "POSTS_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "DELETE_SUCCESS":
      const updatedPosts = state.posts.filter((post) => post.id !== action.payload);
      return {
        posts:  updatedPosts,
        error: null,
      };
      case "DELETE_ERROR":
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
  }
};