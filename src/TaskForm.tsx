// src/components/TaskForm.tsx
import React, { useState } from 'react';
import { verifyStatus } from './api';

interface TaskFormProps {
    onTaskCreated: (task: any) => void; // Adjust the type according to your API response
}

const TaskForm: React.FC<TaskFormProps> = ({ onTaskCreated }) => {
    const sessionId = "5acb209b-9562-44ab-b923-f1407d428a3c"; // Your session ID
    const [createdTask, setCreatedTask] = useState<any>(null); // Store the created task

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (sessionId) {
            const newTask = await verifyStatus(sessionId);
            setCreatedTask(newTask); // Store the created task
            onTaskCreated(newTask);
            // ... (rest of the code)
        }
    };

    // Rest of the code...

    return (
        <form onSubmit={handleSubmit}>
            {/* Rest of the form */}
            {createdTask && (
                <div>
                    <h2>Created Taskssssss</h2>
                    <pre>{JSON.stringify(createdTask, null, 2)}</pre>
                </div>
            )}
        </form>
    );
};

export default TaskForm;
