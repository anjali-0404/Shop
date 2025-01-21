// src/App.js
import React, { useState, useContext } from 'react';
import Header from './Header';
import HabitList from './HabitList';
import AddHabitForm from './AddHabitForm';
import { HabitContext} from '../context/HabitContext';
import '../style.css';

const Home = () => {
    const { habits, addHabit, toggleComplete, deleteHabit, clearCompletedHabits } = useContext(HabitContext);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    return (
        <div className={isDarkMode ? 'app dark-mode' : 'app'}>
            <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} clearCompletedHabits={clearCompletedHabits} />
            <AddHabitForm addHabit={addHabit} />
            <HabitList
                habits={habits}
                toggleComplete={toggleComplete}
                deleteHabit={deleteHabit}
            />
        </div>
    );
};

export default Home