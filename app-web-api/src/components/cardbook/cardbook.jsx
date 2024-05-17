import styles from './BookCard.module.css';


export default function CardBook({id, name, actor, category, description, handlerRemove}){
    
    console.log(id)

    const remove = (event) => {

        event.preventDefault();
        handlerRemove(id);

    }

    return(
        <div className={styles.book_card}>
            <h4>{name}</h4>
            <p>{description}</p>
            <p></p>{actor}
            <p className={styles.category_text}>
                <span></span>{category} 
            </p>
            <div className={styles.book_card_actions}>
                <button onClick={remove}>
                    Excluir
                </button>
            </div>
        </div>


    )
}