import React, { useState } from "react";
import AddHabitForm from "./AddHabitForm";
import HabitList from "./HabitList";

const initialHabits = [
  { habitName: "A bad habit"}
];

function App() {
  const [habits, setHabits] = useState([]);

  const handleAddHabit = (habit) => {
    // TODO: write code to add a new habit here
    setHabits((prevHabits) => [ ...prevHabits, habit ]);
  };

  const handleToggleHabit = (id) => {
    // TODO: write code to toggle a habit's status
    setHabits((prevHabits) => prevHabits.map((habit) => habit.id === id ? { ...habit, completed: !habit.completed } : habit))
  };

  const handleDeleteHabit = (id) => {
    // TODO: write code to delete a habit
    setHabits((prevHabits) => prevHabits.filter((habit) => habit.id !== id));
  };

  return (
    <div className="app">
      <h1>Habit Tracker</h1>
      {/*TODO: add a form to add a new habit*/}
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>Add a Habit</h3>
        <input placeholder="New Habit"></input>
        <button>Add Habit</button>
      </form>
      {/*TODO: add a list of habits*/}
    </div>
  )
}

export default App;
