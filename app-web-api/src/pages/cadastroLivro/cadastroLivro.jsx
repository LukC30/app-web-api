import styles from './cadastroLivro.module.css'
import Input from '../../components/form/input'

export default function CadastroLivro() {

    return (
        <section className={styles.livro_container}>
            <h1>Cadastre aqui o seu livro</h1>
            <form>
                                                                                                                                                                                                                                                                                                                                                                                                                                    {/* <p>
                                                                                                                                                                                                                                                                                                                                                                                                                                        <input type="text" placeholder='Nome do livro' id="" />
                                                                                                                                                                                                                                                                                                                                                                                                                                    </p>
                                                                                                                                                                                                                                                                                                                                                                                                                                    <p>
                                                                                                                                                                                                                                                                                                                                                                                                                                        <input type="text" placeholder='Nome do autor' id="" />
                                                                                                                                                                                                                                                                                                                                                                                                                                    </p>
                                                                                                                                                                                                                                                                                                                                                                                                                                    <p>
                                                                                                                                                                                                                                                                                                                                                                                                                                        <input type="text" placeholder='Descricao do livro' id="" />
                                                                                                                                                                                                                                                                                                                                                                                                                                    </p>
                                                                                                                                                                                                                                                                                                                                                                                                                                    <p>
                                                                                                                                                                                                                                                                                                                                                                                                                                        <input type="Submit" value="Cadastro livro" />
                                                                                                                                                                                                                                                                                                                                                                                                                                    </p> */}
           <Input
                type=""
                name=""
                id=""
                placeholder="" 
                text='comi o cu do lado'
                value=""
                handlerOnChange=""
            />
           <Input
                type=""
                name=""
                id=""
                placeholder="" 
                text='comi o cu do lado'
                value=""
                handlerOnChange=""
           />
           <Input
           type=""
           name=""
           id=""
           placeholder="" 
           text='comi o cu do lado'
           value=""
           handlerOnChange=""
           />
           </form>
        </section>
    )
}