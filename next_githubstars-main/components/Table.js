import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from "primereact/button";

//passar as props pra renderizar automatico as colunas e tmb os dados

export default function Table(props) {
    const [myData, setMyData] = useState()
    const [varHeader, setVarHeader] = useState(props.cabecalho)

    useEffect(async () => {
        const response = await fetch(
            props.link
        );
        const thisData = await response.json();
        setMyData(thisData);

    }, [props.link, props.atual]);

    return (
        <div>
            <div className="card" style={{ height: 'calc(100vh - 145px)' }}>
                <DataTable value={myData} scrollable scrollHeight="flex">
                    {
                        varHeader.map((col) => {
                            return (<Column key={varHeader.indexOf(col)} field={col[0]} header={col[1]} />)
                        })
                    }   
                </DataTable>
            </div>
        </div>
    );
}