const API_BASE_PATH = 'https://findfalcone.herokuapp.com';

export default {
  api: {
    getAllPlanets: `${API_BASE_PATH}/planets`,
    getAllVehicles: `${API_BASE_PATH}/vehicles`,
    getToken: `${API_BASE_PATH}/token`,
    findTheFalcon: `${API_BASE_PATH}/find`,
  },
};
