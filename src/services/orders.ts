/* eslint-disable camelcase */
import api from './api';

interface ServicesProps {
  service_id: number
  quantity: number
}

interface CreateOrderProps {
  comment: string
  services: ServicesProps[]
}

/**
 * Creates a service order
 *
 * @param {Array} services Array of services to create order
 * @param {string} comment Comments to send with the order
 * @returns {object} The services that was bought
*/
export const createOrder = async (payload: CreateOrderProps) => {
  const response = await api.post('services/orders', payload);

  if (response.status !== 200) {
    return false;
  }

  return response.data;
};

interface GetOrdersProps {
  perPage?: number,
  orderBy?: string,
  order?: string,
}

/**
 * Gets orders made to current user technologies
 *
 * @param {object} options Optional params
 * @returns {object} Orders response
*/
export const getOrders = async (params?: GetOrdersProps) => {
  const response = await api.get('orders', {
    params: {
      ...params,
      fromCurrentUser: true,
      embed: true,
    },
  });

  if (response.status !== 200) {
    return false;
  }

  const { data } = response;
  return data;
};

/**
 * Cancels a given order
 *
 * @param {string} id The order id
 * @returns {object} Order response
 */
export const cancelOrder = async (id: string) => {
  if (!id) return false;

  const response = await api.put(`orders/${id}/cancel`, {
    cancellation_reason: '',
  });

  if (response.status !== 200) return false;

  return response.data;
};
