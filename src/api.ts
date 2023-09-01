import axios from 'axios';

const API_BASE_URL = 'http://localhost:9800/v1/fed-login';

/*export const login = async (data: { session_id: string }) => {
    const response = await axios.post(
        `${API_BASE_URL}/login`,
        data,
        {
            headers: {
                'Content-Type': 'application/json',
                'X-Correlation-Id': '155e4567-a11b-42b3-a456-5c6ab2440e93',
            },
        });
    return response.data;
};*/

export const verifyStatus = async (sessionId: string) => {
    const requestBody = {
        session_id: sessionId
    };
    const response = await axios.post(
        `${API_BASE_URL}/verify`,
        requestBody,
        {
            headers: {
                'Content-Type': 'application/json',
                'X-Correlation-Id': '155e4567-a11b-42b3-a456-5c6ab2440e93',
            }
        });
    return response.data;
};
