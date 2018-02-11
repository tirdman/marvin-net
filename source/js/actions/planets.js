export const GET_PLANETS_START = 'GET_PLANETS_START';
export const GET_PLANETS_ERROR = 'GET_PLANETS_ERROR';
export const GET_PLANETS_SUCCESS = 'GET_PLANETS_SUCCESS';


export function getPlanets() {
  return {
    type: GET_PLANETS_START,
  };
}
