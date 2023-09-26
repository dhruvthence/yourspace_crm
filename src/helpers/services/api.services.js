import axios from 'axios';
import API_ACTION from '../actions/api.action';

const BASE_URL = 'https://api.staging.your-space.in/crm_dashboard/v1/admin/';

export const fetchResidents = async () => {
    try {
        return await axios.get(`${BASE_URL}/${API_ACTION.getResidentsAPI}`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error;
            });
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};

export const fetchResidentDetails = async (residentId) => {
    try {
        return await axios.get(`${BASE_URL}${residentId}/${API_ACTION.getResidentDetailsAPI}`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error;
            });
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};