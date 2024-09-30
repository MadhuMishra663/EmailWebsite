import React, { useState, useEffect } from 'react';
import CustomEditor from './CustomEditor';

export default function Onebox() {
    const [threads, setThreads] = useState([]);

    const fetchThreads = async () => {
        const response = await fetch('/onebox/list');
        const data = await response.json();
        setThreads(data);
    };

    useEffect(() => {
        fetchThreads();
    }, []);
    // useEffect(() => {
    //     const params = new URLSearchParams(window.location.search);
    //     const token = params.get('token');
    //     if (token) {
    //         localStorage.setItem('token', token);
    //         window.history.replaceState({}, document.title, "/home"); // Clear token from URL
    //     }
    // }, []);
    const handleDelete = async (threadId) => {
        await fetch(`/onebox/${threadId}`, { method: 'DELETE' });
        fetchThreads();
    };

    useEffect(() => {
        const handleKeydown = (event) => {
            if (event.key === 'D') {
                handleDelete(threads[0]?._id); // Example: Delete the first thread
            }
            if (event.key === 'R') {
                console.log('Reply'); // Example: Open reply box
            }
        };

        document.addEventListener('keydown', handleKeydown);
        return () => document.removeEventListener('keydown', handleKeydown);
    }, [threads]);

    return (
        <div>
            <h1>Onebox Threads</h1>
            {threads.map(thread => (
                <div key={thread._id}>
                    <h3>{thread.subject}</h3>
                    <p>{thread.body}</p>
                    <button onClick={() => handleDelete(thread._id)}>Delete</button>
                </div>
            ))}
            <CustomEditor />
        </div>
    );
}
