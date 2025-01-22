// src/context/HabitContext.js
import React, { createContext, useState } from 'react';

export const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
    const [habits, setHabits] = useState(() =>{
        try{
            const existingHabits = localStorage.getItem('habits');
            return existingHabits ? JSON.parse(existingHabits) : [];

        }catch(error){
            console.error(error);
            return [];
        }
    });

    const setLocalStorage = (key, value) => {
        try{
            localStorage.setItem(key, JSON.stringify(value));
        }catch(error){
            console.error("Could not save to localstorage", error);
        }
    }

    const addHabit = (name) => {
        const newHabit = { id: Date.now(), name, completed: false };
        setHabits(prev => {
            const updatedHabits = [...prev, newHabit];
            setLocalStorage('habits', updatedHabits);
            return updatedHabits;
        });
    };

    const toggleComplete = (id) => {
        setHabits(prev => {
            const updatedHabits = prev.map((habit) => {
                if (habit.id === id) {
                    return { ...habit, completed: !habit.completed };
                }
                return habit;
            });
            setLocalStorage('habits', updatedHabits);
            return updatedHabits;
        })
    };

    const deleteHabit = (id) => {
        setHabits(prev => {
            const updatedHabits = prev.filter((habit) => habit.id !== id);
            setLocalStorage('habits', updatedHabits);
            return updatedHabits;
        });
    };

    const clearCompletedHabits = () =>{
        setHabits(prev => {
            const updatedHabits = prev.filter((habit) => !habit.completed);
            setLocalStorage('habits', updatedHabits);
            return updatedHabits;
        });
    }

    return (
        <HabitContext.Provider value={{ habits, addHabit, toggleComplete, deleteHabit, clearCompletedHabits }}>
            {children}
        </HabitContext.Provider>
    );
};
