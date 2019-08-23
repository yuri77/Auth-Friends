import {
  FETCH_FRIEND_DATA_START,
  FETCH_FRIEND_DATA_SUCCESS,
  FETCH_FRIEND_DATA_FAILURE
} from "../actions";


const initialState = {
  friends: [],
  isLoading: false,
  error: ""
};

export const friendReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FRIEND_DATA_START:
        return {
          ...state,
          isLoading: true,
          error: ""
        };
      case FETCH_FRIEND_DATA_SUCCESS:
        console.log("Success from reducer");
        return {
          ...state,
          friends: action.payload,
          isLoading: false,
          error: ""
        };
      case FETCH_FRIEND_DATA_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload
        };
    default:
      return state;
  }
};
