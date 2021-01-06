import { GET_CHAR, FAIL_REQUEST, REQUEST_CHARACTER } from '../actions';

const initialState = {
  isFetching: false,
  error: '',
  char: {
    name: '',
    gender: '',
    aliases: [],
    books: [],
  }
}

export default function charReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHAR:
      return { ...state, isFetching: false, char: action.payload}
    case FAIL_REQUEST:
      return { ...state, isFetching: false, error: action.payload }
    case REQUEST_CHARACTER:
      return { ...state, isFetching: true }
    default:
      return state;
  }
}