import {FETCHING, SUCCESS, FAILURE} from '../actions';

const initialState = {
  characters: [],
  isFetching: false,
  error: ''
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isFetching: false,
        error: ''
      };
    case FAILURE:
      return {
        ...state,
        error: action.payload,
        characters: '',
        isFetching: false
      };
    default:
      return state;
  }
};
