// src/context/HabitContext.js
import React, { createContext, useState } from 'react';

export const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
    const [habits, setHabits] = useState([]);

    const addHabit = (name) => {
        const newHabit = { id: Date.now(), name, completed: false };
        setHabits([...habits, newHabit]);
    };

    const toggleComplete = (id) => {
        setHabits(
            habits.map((habit) =>
                habit.id === id ? { ...habit, completed: !habit.completed } : habit
            )
        );
    };

    const deleteHabit = (id) => {
        setHabits(habits.filter((habit) => habit.id !== id));
    };

    return (
        <HabitContext.Provider value={{ habits, addHabit, toggleComplete, deleteHabit }}>
            {children}
        </HabitContext.Provider>
    );
};
