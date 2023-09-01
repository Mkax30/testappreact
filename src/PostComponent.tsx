import React from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';

const PostComponent: React.FC = () => {
    const postMutation = useMutation(
        async (requestData: any) => {
            try {
                const response = await axios.post(
                    'http://localhost:9800/v1/fed-auth/verify',
                    requestData,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'X-Correlation-Id': '155e4567-a11b-42b3-a456-5c6ab2440e93',
                        }
                    });

                return response.data;
            } catch (error) {
                // @ts-ignore
                throw new Error(`Requestdddd failed: ${error.message}`);
            }
        }
    );

/*const PostComponent: React.FC = () => {
    const queryClient = useQueryClient();

    const postMutation = useMutation(
        async (requestData: any) => {
            const response = await fetch('localhost:9800/v1/fed-auth/verify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Correlation-Id': '155e4567-a11b-42b3-a456-5c6ab2440e93',
                },
                body: JSON.stringify(requestData),
            });
            return response.json();
        },
        {
            onSuccess: () => {
                // Invalidate and refetch relevant queries after the mutation is successful
                queryClient.invalidateQueries('yourQueryKey'); // Replace with your actual query key
            },
        }
    );*/

    const handleSubmit = () => {
        const requestData = {
            session_id: '5acb209b-9562-44ab-b923-f1407d428a3c'
        };
        postMutation.mutate(JSON.stringify(requestData));
    };

    return (
        <div>
            <h2>Post Request Example</h2>
            <button onClick={handleSubmit} disabled={postMutation.isLoading}>
                {postMutation.isLoading ? 'Sending...' : 'Send POST Request'}
            </button>
            {postMutation.isError && (
                <p>Error: {(postMutation.error as Error).message}</p>
            )}
            {postMutation.isSuccess && <p>Request successful!</p>}
        </div>
    );
};

export default PostComponent;
