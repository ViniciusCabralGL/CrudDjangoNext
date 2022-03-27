import styles from "../styles/Home.module.scss";
import Head from "next/head";
import Header from "../components/Header";
import Assinaturas from "../components/Assinaturas";
import Table from "../components/Table";
import React, { useState } from 'react';

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

                    <Table link='http://localhost:8000/assinaturas/' cabecalho={[['nome', 'Nome']]} atual={atual} />

                </div>
                <div
                    className={
                        styles.contentPanel +
                        " flex align-items-center justify-content-center"
                    }>
                    <Assinaturas minhaFuncao={carregarCadastro}></Assinaturas>
                </div>
            </div>
        </div>
    );
}
