export const GET_FILMS_START = 'GET_FILMS_START';
export const GET_FILMS_ERROR = 'GET_FILMS_ERROR';
export const GET_FILMS_SUCCESS = 'GET_FILMS_SUCCESS';


export function getFilms() {
  return {
    type: GET_FILMS_START,
  };
}
