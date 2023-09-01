// src/components/UserList.tsx

import React, {useEffect, useState} from 'react';
import axios from 'axios';


interface PostRequest {
    session_id: string;
}

interface PostResponse {
    session_id: string;
    session_code: string;
    tab_id: string;
    client_id: string;
    execution: string;
    piduuid: string;
    valid: boolean;
    auth_time: number;
}

const VerifyStatus: React.FC = () => {
    const [status, setStatus] = useState<string | null>(null); // Use the output type for status
    const [newUser, setNewUser] = useState<PostRequest>({ session_id: '' }); // Use the input type for newUser

    useEffect(() => {
        // Define the API endpoint you want to fetch data from
        const apiUrl = 'http://localhost:9800/v1/fed-login/verify';

        // Payload
        // const requestBody = {session_id: '5acb209b-9562-44ab-b923-f1407d428a3c'};
        const requestData: PostRequest = { session_id: '5acb209b-9562-44ab-b923-f1407d428a3c' };

        // Fetch data when the component mounts
        axios.post<PostResponse>(apiUrl, requestData, {
            headers: {
                'Content-Type': 'application/json',
                'X-Correlation-Id': '155e4567-a11b-42b3-a456-5c6ab2440e93',
            },
        })
            .then((response) => {
                console.log(response.data);
                setStatus(response.data.session_id);
                setNewUser({session_id: ''})
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Verify Status</h1>
            <ul>
                <li key={status}>
                    <strong>{status}</strong>
                </li>
                {/*{users.map((user) => (*/}
                {/*    <li key={user.id}>*/}
                {/*        <strong>{user.name}</strong> - {user.email}*/}
                {/*    </li>*/}
                {/*))}*/}
            </ul>
        </div>
    );
};

export default VerifyStatus;
