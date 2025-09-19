import styles from "./User.module.css";

export default function User({ user, onClick }) {
  return (
    <div className={styles.card} onClick={() => onClick(user.id)}>
      <h3>{user.name}</h3>
      <p>{user.company.catchPhrase}</p>
    </div>
  );
}
