import React from 'react';
import Menu from '../../components/Menu'
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carrossel from '../../components/Carrossel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é BCC? Aqui você encontra uma visão geral do curso de ciência da computação, cronograma de estudo, entendimento de areas da TI e dicas do que assistir para você que gosta desses conteudos"}
      />

      <Carrossel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carrossel
        category={dadosIniciais.categorias[1]}
      />

      <Carrossel
        category={dadosIniciais.categorias[2]}
      />      

      <Carrossel
        category={dadosIniciais.categorias[3]}
      />      

      <Carrossel
        category={dadosIniciais.categorias[4]}
      />      

      <Carrossel
        category={dadosIniciais.categorias[5]}
      />      

      <Footer />
    </div>
  );
}

export default Home;
