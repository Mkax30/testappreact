// import React, {useEffect, useState} from 'react';
// import ReactDOM from 'react-dom';
import QRCodeComponent from './QRCodeComponent';
import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import PostComponent from './PostComponent';
import React, {useState} from "react";
import TaskForm from "./TaskForm";
import UserList from "./UserList";
import VerifyStatus from "./VerifyStatus";


const queryClient = new QueryClient();

/*ReactDOM.render(
    <QueryClientProvider client={queryClient}>
        <PostComponent />
    </QueryClientProvider>,
    document.getElementById('root')
);*/

/*interface ApiResponse {
    session_id: string;
    session_code: string;
    tab_id: string;
    client_id: string;
    execution: string;
    piduuid: string;
    valid: boolean;
    auth_time: number;
}*/

const App: React.FC = () => {
    // const [apiData, setApiData] = useState<ApiResponse[]>([]);
    // const sessionId = "5acb209b-9562-44ab-b923-f1407d428a3c"; // Replace with your session ID
    /*useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:9800/v1/fed-auth/verify', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Correlation-Id': '155e4567-a11b-42b3-a456-5c6ab2440e93',
                    },
                    body: JSON.stringify({sessionId}),
                });
                const data = await response.json();
                setApiData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [sessionId]);*/
    interface Task {
        session_id: string;
    }
    const [tasks, setTasks] = useState<Task[]>([]);
    const handleTaskCreated = (task: any) => {
        setTasks(prevTasks => [...prevTasks, task]);
    };

    const qrCodeData = 'https://idp.pbk.com/qrauth?session_id=9d26dd58-de3f-4621-b1b9-096debe49e9c&client_name=Osobní zóna ČEZ&code=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uX2lkIjoiNTMyMjhlY2UtMmFhMy00OWQyLWIxMTQtYjY0NGE0MTg5N2FmIiwiZXhwIjoxNjkxMDkyODg2LCJpYXQiOjE1MTYyMzkwMjJ9._l8NyPPH3HrXMGvOzBcpW6DKsRh1CC8QBTts0Q9tWZ8';
    return (
        <div className="App">
            {/*{apiData.length === 0 ? (
                <p>No data available.</p>
            ) : (apiData.map(item => (
                <div key={item.session_id}>
                    <p>{item.session_id}</p>
                    <p>{item.session_code}</p>
                    <p>{item.client_id}</p>
                    <p>{item.tab_id}</p>
                    <p>{item.execution}</p>
                    <p>{item.piduuid}</p>
                    <p>{item.valid}</p>
                    <p>{item.auth_time}</p>
                </div>
            )))}*/}

            {/*<QueryClientProvider client={queryClient}>
                <div className="App">
                    <PostComponent />
                </div>
            </QueryClientProvider>*/}

            <QueryClientProvider client={queryClient}>
                <PostComponent />
            </QueryClientProvider>

            <QRCodeComponent data={qrCodeData}/>

            <h1>Task Form</h1>

            <TaskForm onTaskCreated={handleTaskCreated} />

            <h1>Tasks</h1>
            {tasks.map(task => (
                <div key={task.session_id}>
                    <h2>{task.session_id} dd</h2>
                    <p>{task.session_id} dd</p>
                </div>
            ))}

            <UserList />

            <VerifyStatus />

            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <a
                    className="App-link"
                    href="http://localhost:3000"
                    rel="noopener noreferrer"
                >
                    zpět
                </a>

                <p>
                    Poskytovatel služeb <b>sdf</b> neco neco
                </p>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload. yohodooo
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
};

export default App;



