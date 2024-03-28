import styles from './navbar.module.css'
import { Link, Outlet } from 'react-router-dom';
import Container from '../container/container';
export default function Navbar() {

    return (
        <div>
            <Container>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/listaLivros'>Livros</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/cadLivro'>Cadastro</Link>
                    </li>
                </ul>
                <Outlet />
            </Container>
        </div>
    )
}