// src/App.js
import React from 'react';
import TimetableGenerator from './components/TimetableGenerator';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Create Student Class Timetable</h1>
            </header>
            <main>
                <TimetableGenerator />
            </main>
        </div>
    );
}

export default App;
