export const SET_CONFIGURISH_IP = 'SET_CONFIGURISH_IPT';
export const GET_DEVICE_DETAILS = 'GET_DEVICE_DETAILS';
export const GET_DEVICE_DETAILS_START = 'GET_DEVICE_DETAILS_START';
export const GET_DEVICE_DETAILS_ERROR = 'GET_DEVICE_DETAILS_ERROR';
export const GET_DEVICE_DETAILS_SUCCESS = 'GET_DEVICE_DETAILS_SUCCESS';

export function setConfigurishIP(ip) {
  return {
    type: SET_CONFIGURISH_IP,
    ip
  };
}

export function getDeviceDetails() {
  return {
    type: GET_DEVICE_DETAILS_START,
  };
}

