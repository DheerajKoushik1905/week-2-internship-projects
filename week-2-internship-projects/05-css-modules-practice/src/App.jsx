import ProfileCard from './components/ProfileCard.jsx';

export default function App() {
  return (
    <main className="page">
      <header>
        <p>Week 2 · React Fundamentals</p>
        <h1>CSS Modules Practice</h1>
      </header>
      <div className="grid">
        <ProfileCard name="Rolla Dheeraj Koushik" role="CSE (AI & ML) Student" skills={['React', 'HTML', 'CSS', 'JavaScript']} />
        <ProfileCard name="Reusable Styling" role="Component-scoped CSS" skills={['Modules', 'Scoped Classes', 'Responsive UI']} />
      </div>
    </main>
  );
}
