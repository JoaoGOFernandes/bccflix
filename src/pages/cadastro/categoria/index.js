import React from "react";
import { Link } from "react-router-dom";
import TemplatePages from "../../../components/TemplatePages";


function CadastroCategoria() {
    return (
      <TemplatePages>
        <h1>Cadastro de Categoria</h1> 

        <Link to="/">
            Ir para a home
        </Link>
      </TemplatePages>
    )
  }

export default CadastroCategoria;