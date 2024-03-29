import styles from './home.module.css'
import './home.module.css';
export default function Home() {

    return (
        <section className={styles.home_container}>
            <h1>Libri</h1>
            <p>Comece a gerenciar os seus livros agora mesmo</p>
        </section>
    )
}