import styles from '../../App.module.css';

export default function Footer() {
    return (
        <footer className={styles.rodape}>
            <p>© 2025 Alef Silva Santos</p>
            <p>
                <a href="https://github.com/AlefSillva" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
                {" | "}
                <a href="https://www.linkedin.com/in/alefsilvasantos15/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
            </p>
        </footer>
    );
}
