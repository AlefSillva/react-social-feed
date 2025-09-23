import styles from "./User.module.css";

export default function User({ user, onClick }) {
  return (
    <div className={styles.card} onClick={() => onClick(user.id)}>
      <div>
        <img 
          src={`https://picsum.photos/seed/${user.id}/100/100`} 
          alt="foto de perfil aleatória" 
        />
      </div>
      <div className={styles.userInfo}>
        <h3>{user.name}</h3>
        <p>{user.company.catchPhrase}</p>
      </div>
    </div>
  );
}
