import { NavLink, Route, Routes } from 'react-router-dom';

function Home() {
  return <section className="panel"><p className="eyebrow">Home</p><h1>React Router Demo</h1><p>This page demonstrates client-side multi-page navigation without a full page reload.</p></section>;
}
function About() {
  return <section className="panel"><p className="eyebrow">About</p><h1>About this project</h1><p>Routes are mapped to React components using React Router.</p></section>;
}
function Contact() {
  return <section className="panel"><p className="eyebrow">Contact</p><h1>Contact</h1><p>Email: dheerajkoushik08@gmail.com</p></section>;
}
function NotFound() {
  return <section className="panel"><h1>404</h1><p>Page not found.</p></section>;
}

export default function App() {
  return (
    <div className="app-shell">
      <nav>
        <strong>Dheeraj.dev</strong>
        <div className="links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
