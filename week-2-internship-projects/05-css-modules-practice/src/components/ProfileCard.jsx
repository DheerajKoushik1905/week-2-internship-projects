import styles from './ProfileCard.module.css';

export default function ProfileCard({ name, role, skills }) {
  return (
    <article className={styles.card}>
      <div className={styles.avatar}>{name.split(' ').map((part) => part[0]).slice(0, 2).join('')}</div>
      <div>
        <p className={styles.label}>CSS Modules</p>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.role}>{role}</p>
        <div className={styles.skills}>
          {skills.map((skill) => <span key={skill}>{skill}</span>)}
        </div>
      </div>
    </article>
  );
}
