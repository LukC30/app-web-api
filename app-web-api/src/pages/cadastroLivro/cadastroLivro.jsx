import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './cadastroLivro.module.css'
import Input from '../../components/form/input'
import Select from '../../components/form/select'

export default function CadastroLivro() {

    const navigate = useNavigate("");
    const [categories, setCategories] = useState([]);

    //Estado de dado que armazena o estado de livro em um JSON
    const [book, setBook] = useState({});

    useEffect(() => {

        fetch('http://localhost:5000/Categories',
            {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            })
            .then(
                (response) => response.json()
            ).then(
                (data) => {
                    setCategories(data);
                    console.log(data);
                    
                }
            )
            .catch(
                (error) => {
                    console.log(`Não foi possivel fazer o fetch do conteudo: ${error}`)
                }
            )
    },
        []);

    function handlerBook(event) {
        event.preventDefault();
        console.log(book);
        setBook({...book, [event.target.name] : event.target.value});
        
    }

    function handlerCategory(event){
        setBook({...book, categrory:{
            id: event.target.value,
            category: event.target.options[event.target.selectedIndex].text
        }});
        console.log(book)
    }

    function createBook(book){

        fetch('http://localhost:5000/Books',{
            method: 'POST',
            headers:{
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(book)
        })
        .then((response)=>{
            return response.json();
        })
        .then((response)=>{
            console.log(response);
            navigate("/listaLivros", {state: 'livro cadastrado com sucesso'});
        })
        .catch((error)=>{
            console.log(`Deu algo errado aí irmão: ${error}`)
            return error;
        })

    }
    function submit(event){
        event.preventDefault();
        createBook(book);
    }

    return (
        <section className={styles.livro_container}>
            <h1>Cadastre aqui o seu livro</h1>
            <form onSubmit={submit}>
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
                    type="text"
                    name="nome_livro"
                    id="nome_livro"
                    placeholder="Digite o nome do livro:"
                    text='Digite o titulo do livro'

                    handlerOnChange={handlerBook}
                />
                <Input
                    type="text"
                    name="nome_autor"
                    id="nome_autor"
                    placeholder="Digite o nome do autor"
                    text='Nome do autor'

                    handlerOnChange={handlerBook}
                />
                <Input
                    type="text"
                    name="descricao_livro"
                    id="descricao_livro"
                    placeholder="Digite a descricao do livro"
                    text='Descrição do livro'

                    handlerOnChange={handlerBook}
                />

                <Select
                    name='categoria_id'
                    text='Selecione a categoria'
                    options={categories}
                    handlerOnChange={handlerCategory}                                                                                                                                                                                                                                                                                                                                                                                                        
                />
                <Input
                    type='submit'
                    text='Cadastrar Livro'
                    placeholder="Descrição"
                    
                />
            </form>
        </section>
    )
}