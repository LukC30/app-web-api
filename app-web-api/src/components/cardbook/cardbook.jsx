import styles from './BookCard.module.css';


export default function CardBook({id, name, actor, category}){


    return(
        <div id={id} className={styles.book_card}>
            <h4>{name}</h4>
            <p></p>{actor}
            <p className={styles.category_text}>
                <span></span>{category} 
            </p>
        </div>


    )
}