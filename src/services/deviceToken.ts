/* eslint-disable camelcase */
import api from './api';

/**
 * Creates the deviceToken for a given user && deviceUID.
 *
 * @param {string} deviceUID The unique device ID.
 * @param {string} deviceToken The device Token.
 *
 * @returns {id,user_id,device_uuid,device_token,created_at,updated_at};
 */
export async function createToken(deviceUID: string, deviceToken: string) {
  const response = await api.post('device-tokens', {
    device_uuid: deviceUID,
    device_token: deviceToken,
  });
  return response;
}

/**
 * Updates the deviceToken for a given user && deviceUID.
 *
 * @param {string} deviceUID The unique device ID.
 * @param {string} deviceToken The device Token.
 *
 * @returns {id,user_id,device_uuid,device_token,created_at,updated_at};
 */
export async function updateToken(deviceUID: string, deviceToken: string) {
  const response = await api.put(`device-tokens/${deviceUID}`, {
    deviceToken,
  });
  return response;
}

/**
 * Deletes the deviceToken for a given user && deviceUID.
 *
 * @param {string} deviceUID The unique device ID.
 * @param {string} deviceToken The device Token.
 *
 * @returns {id,user_id,device_uuid,device_token,created_at,updated_at};
 */
export async function deleteToken(deviceUID: string) {
  const response = await api.delete(`device-tokens/${deviceUID}`);
  return response;
}
