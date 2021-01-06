import charAPI from '../services/charAPI';

export const GET_CHAR = "GET_CHAR";
export const FAIL_REQUEST = "FAIL_REQUEST";
export const REQUEST_CHARACTER = "REQUES_CHARACTER"

export const getChar = (char) => ({
  type: GET_CHAR,
  payload: char,
})

export const failRequest = (error) => ({
  type: FAIL_REQUEST,
  payload: error,
})

export const requestCharacter = () => ({
  type: REQUEST_CHARACTER,
})

export function fetchChar(char) {
  return (dispatch) => {
    dispatch(requestCharacter());
    
    return charAPI(char).then(
      (response) => {
        if(response.length) {
          dispatch(getChar({
            name: response[0].name,
            gender: response[0].gender,
            aliases: response[0].aliases,
            books: response[0].books,
          }))
        } else {
          throw ('Nome invalido')
        }
      }
    ).catch(msg => dispatch(failRequest(msg)));
  }
}