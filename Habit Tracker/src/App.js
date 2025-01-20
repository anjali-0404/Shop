// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HabitProvider } from './context/HabitContext';
import Home from './components/Home';
import HabitListPage from './components/HabitListPage';


const App = () => {
        return (
        <Router>
            <nav>
                {/* Add navigation links */}
                <Link to="/">Home</Link> | <Link to="/all-habits">All Habits</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/all-habits" element={<HabitListPage />} />
            </Routes>
        </Router>
    );
};

export default () => (
    <HabitProvider>
        <App />
    </HabitProvider>
);
