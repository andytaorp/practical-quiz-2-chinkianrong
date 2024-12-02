import React, { useState } from "react";

export default function AddHabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState("");

  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
    e.preventDefault();

    if (!habitName) return;

    const newHabit = {
      habitName
    }

    setHabitName("");
  };

  return (
    //TODO: add a form to add a new habit
    <div>
    <h1>Habit Tracker</h1>
    {/*TODO: add a form to add a new habit*/}
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Add a Habit</h3>
      <input placeholder="New Habit"></input>
      <button>Add Habit</button>
    </form>
    {/*TODO: add a list of habits*/}
  </div>
  );
}
