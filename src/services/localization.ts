import api from './api';

export const getStates = async (): Promise<any> => api.get('states', {
  params: {
    embed: true,
  },
});

interface CitiesParams {
  stateId: number;
}

export const getCities = async ({ stateId }: CitiesParams): Promise<any> => api.get(`states/${stateId}/cities`, {
  params: {
    embed: true,
  },
});
