import styles from '../../App.module.css';
import logo from '../../assets/logo.png';

export default function Header() {
    return (
        <header className={styles.cabecalho}>
            <h1 className={styles["header-title"]}>
                <img src={logo} alt="logo" />
            </h1>
            <h2 className={styles["header-subtitle"]}>React Social Feed</h2>
        </header>
    )
}


