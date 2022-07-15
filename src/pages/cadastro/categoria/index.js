import React, {useState} from "react";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormField";
import TemplatePages from "../../../components/TemplatePages";


function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }

    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);
    
    
    //chave: nome, descricao ou cor
    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        })
    }

    function handlerChange(infosDoEvento) {
        setValue(
            infosDoEvento.target.getAttribute('name'), 
            infosDoEvento.target.value
        );
    }

    return (
      <TemplatePages>
        
        <h1>Cadastro de {values.nome}</h1> 

        <form onSubmit={function handleSubmit(infosDoEvento) {
            infosDoEvento.preventDefault();
            setCategorias([
                ...categorias,
                values
            ])
            
            setValues({valoresIniciais})

        } }>

            <FormField
                label="Nome da Categoria:"
                type="text" 
                name="nome "
                value={values.nome}
                onChange={handlerChange}
            />

            <FormField
                label="Descrição: "
                type="text" 
                name="descricao"
                value={values.descricao}
                onChange={handlerChange}
            />

            <FormField
                label="Cor: "
                type="color" 
                name="cor"
                value={values.cor}
                onChange={handlerChange}
            />
            {/*
            <div>
                <label>
                    Nome da Categoria:
                    <input 
                        type="text" 
                        name="nome"
                        value={values.nome}
                        onChange={handlerChange}
                    />
                </label>
            </div>
            

            <div>
                <label>
                    Descrição:
                    <textarea 
                        type="text" 
                        name="descricao"
                        value={values.descricao}
                        onChange={handlerChange}
                    />
                </label>
            </div>

            <div>
                <label>
                    Cor:
                    <input 
                        type="color" 
                        name="cor"
                        value={values.cor}
                        onChange={handlerChange}
                    />
                </label>
            </div>
            */}

            <button>
                Cadastrar
            </button>
        </form>

        <ul>
            {categorias.map((categoria, indice)=>{
                return (
                    <li key={`${categoria}${indice}`}>
                        {categoria.nome}
                    </li>
                )
            })}
        </ul>

        <Link to="/">
            Ir para a home
        </Link>
      </TemplatePages>
    )
  }

export default CadastroCategoria;