import React, { useContext } from 'react';
import { HabitContext } from '../context/HabitContext';
import '../styling/HabitListPage.css'; // Import the CSS file

const HabitListPage = () => {
    const { habits } = useContext(HabitContext);

    return (
        <div className="habit-page">
            <div className="habit-page-title" style={{fontFamily:"dancing", fontSize:"30px"}}>All Habits</div>
            <ul className="habit-list">

                {habits.length>0 ? habits.map((habit, index) => (
                    <li
                        key={index}
                        className={`habit-item ${habit.completed ? 'completed' : 'incomplete'}`}
                    >
                        <span className="habit-name">{habit.name}</span>
                        <span className="habit-status">
                            {habit.completed ? 'Completed' : 'Incomplete'}
                        </span>
                    </li>
                )):(
                    <div style={{display:'flex',justifyContent:"center"}}>
                        Oops! You dont have any habits saved yet
                    </div>
                )}
            </ul>
        </div>
    );
};

export default HabitListPage;
