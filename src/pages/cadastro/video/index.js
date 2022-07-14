import React from "react";
import { Link } from "react-router-dom";
import TemplatePages from "../../../components/TemplatePages";


function CadastroVideo() {
    return (
      <TemplatePages>
        <h1>Cadastro de Video</h1> 

        <Link to="/cadastro/categoria">
            Cadastrar Categoria
        </Link>
      </TemplatePages>
    )
  }

export default CadastroVideo;