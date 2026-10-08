export default function StudentCard({ name, course, focus }) {
  return (
    <section className="student-card">
      <p className="label">Student profile</p>
      <h2>{name}</h2>
      <p>{course}</p>
      <p><strong>Current focus:</strong> {focus}</p>
    </section>
  );
}
