import { useMemo, useState } from 'react';

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Review React components' },
    { id: 2, text: 'Practice state management' }
  ]);
  const [text, setText] = useState('');

  const remaining = useMemo(() => tasks.length, [tasks]);

  const addTask = (event) => {
    event.preventDefault();
    const value = text.trim();
    if (!value) return;
    setTasks((current) => [...current, { id: Date.now(), text: value }]);
    setText('');
  };

  const deleteTask = (id) => setTasks((current) => current.filter((task) => task.id !== id));

  return (
    <main className="page">
      <section className="todo-card">
        <p className="eyebrow">Week 2 React Task</p>
        <h1>To-Do App</h1>
        <p className="summary">{remaining} task{remaining !== 1 ? 's' : ''} in your list</p>
        <form onSubmit={addTask}>
          <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter a task" aria-label="Task name" />
          <button type="submit">Add task</button>
        </form>
        {tasks.length === 0 ? <p className="empty">No tasks yet. Add one above.</p> : (
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <span>{task.text}</span>
                <button className="delete" onClick={() => deleteTask(task.id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
