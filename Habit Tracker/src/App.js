// src/App.js
import React, { useState, useContext } from 'react';
import Header from './components/Header';
import HabitList from './components/HabitList';
import AddHabitForm from './components/AddHabitForm';
import { HabitContext, HabitProvider } from './context/HabitContext';
import './style.css';

const App = () => {
    const { habits, addHabit, toggleComplete, deleteHabit } = useContext(HabitContext);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    return (
        <div className={isDarkMode ? 'app dark-mode' : 'app'}>
            <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
            <AddHabitForm addHabit={addHabit} />
            <HabitList
                habits={habits}
                toggleComplete={toggleComplete}
                deleteHabit={deleteHabit}
            />
        </div>
    );
};

export default () => (
    <HabitProvider>
        <App />
    </HabitProvider>
);
