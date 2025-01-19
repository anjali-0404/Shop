// src/components/Header.js
import React from 'react';

const Header = ({ toggleDarkMode, isDarkMode, clearCompletedHabits }) => {
    return (
        <header className="header">
            <h1>Habit Tracker</h1>
            <button onClick={clearCompletedHabits} >
                Clear Completed Habits
            </button>
            <button onClick={toggleDarkMode}>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </header>
    );
};

export default Header;
