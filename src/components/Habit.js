import React from "react";

/**
 * Habit component that displays a habit, allows the user to toggle
 * the habit's completed state, and delete the habit.
 *
 * TODO: implement the Habit component here
 */
export default function Habit({ habit, onDeleteHabit, onToggleHabit }) {
    return (
        <li>
            <input type="checkbox" value={habit.completed} onChange={() => onToggleHabit(habit.id)} />
            <span style={habit.completed ? "Completed" : ""} />
            <button onClick={() => onDeleteHabit(habit.id)}>Delete</button>
        </li>
    )
}
