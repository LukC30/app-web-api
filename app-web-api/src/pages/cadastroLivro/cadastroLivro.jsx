import { useState, useEffect } from 'react'

import styles from './cadastroLivro.module.css'
import Input from '../../components/form/input'
import Select from '../../components/form/select'

export default function CadastroLivro() {


    const [categories, setCategories] = useState([]);
    
    useEffect(()=>{
    
    fetch('http://localhost:5000/Categories',
        {
            method: 'GET',
            headers: {'Content-Type':'application/json'}
        })
    .then(
        (response)=>response.json()
    ).then(
        (data)=>{
            setCategories(data);
            console.log(data);
        }
    )
    .catch(
        (error)=>{
            console.log(`Não foi possivel fazer o fetch do conteudo: ${error}`)
        }
    )
        },
            []);

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
                type="text"
                name="nome_livro"
                id="nome_livro"
                placeholder="Digite o nome do livro:" 
                text='Digite o titulo do livro'
                value=""
                handlerOnChange=""
            />
           <Input
                type="text"
                name="nome_autor"
                id="nome_autor"
                placeholder="Digite o nome do autor" 
                text='Nome do autor'
                value=""
                handlerOnChange=""
           />
           <Input
           type="text"
           name="descricao_livro"
           id="descricao_livro"
           placeholder="Digite a descricao do livro" 
           text='Descrição do livro'
           value=""
           handlerOnChange=""
           />

            <Select
            name='categoria_id'
            text='Selecione a categoria'
            options={categories}
            
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