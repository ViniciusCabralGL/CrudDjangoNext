import styles from "../styles/Home.module.scss";
import Head from "next/head";
import Header from "../components/Header";
import Clientes from "../components/Clientes";
import Table from "../components/Table";
import { useState } from "react";

export default function Home() {
  const data = [
    ['Home', '0', 'Home'],
    ['Categorias', '1', 'Categorias'],
    ['Clientes', '2', 'Clientes'],
    ['Filmes', '3', 'Filmes'],
    ['Assinaturas', '4', 'Assinaturas'],
    ['Favoritos', '5', 'Favoritos']
  ]

  const [atual, setAtual] = useState()
  function carregarCadastro() {
    if (atual) {
      setAtual(false)
    } else {
      setAtual(true)
    }
  }

  return (
    <div className={styles.main}>
      <Head>
        <title>Crud filmes</title>
      </Head>
      <Header config={data}></Header>
      <div className={styles.sepMain}>
        <div
          className={
            styles.logoPanel + " flex align-items-center justify-content-center"
          }>
          <div className={styles.stars1}></div>
          <div className={styles.stars2}></div>
          <div className={styles.stars3}></div>

          <Table link='http://localhost:8000/usuarios/' cabecalho={[['nome', 'Nome'], ['email', 'Email'], ['fone', 'Telefone'], ['ativo', 'Ativo'], ['assinatura_FK', 'Assinatura']]} atual={atual}/>

        </div>
        <div
          className={
            styles.contentPanel +
            " flex align-items-center justify-content-center"
          }>
          <Clientes minhaFuncao={carregarCadastro}></Clientes>
        </div>
      </div>
    </div>
  );
}
