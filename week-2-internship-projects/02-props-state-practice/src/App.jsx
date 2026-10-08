import { useState } from 'react';
import StudentCard from './components/StudentCard.jsx';

export default function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Start practicing React state.');

  const increase = () => {
    setCount((value) => value + 1);
    setMessage('State updated successfully.');
  };

  return (
    <main className="page">
      <h1>Props & State Practice</h1>
      <div className="layout">
        <StudentCard
          name="Rolla Dheeraj Koushik"
          course="B.Tech CSE (AI & ML), SRM University-AP"
          focus="React fundamentals"
        />
        <section className="counter-card">
          <p className="label">State example</p>
          <h2>Interaction count: {count}</h2>
          <p>{message}</p>
          <div className="actions">
            <button onClick={increase}>Increase</button>
            <button className="secondary" onClick={() => { setCount(0); setMessage('Counter reset.'); }}>Reset</button>
          </div>
        </section>
      </div>
    </main>
  );
}
