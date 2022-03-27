import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Header(props) {
    return (
        <>
            <div className="myHeader">
                {props.config.map((data) => <Link href={data[2]} key={data[1]}><a className="headerLink">{data[0]}</a></Link>)}
            </div>
            <style jsx>{`
                .myHeader{
                    width: 100%;
                    height: 100px;
                    background-color: black;
                    perspective: 1000px;
                    
                    display: flex;
                    justify-content: space-around;
                    align-itens: center;
                    
                } 
                div .myInput{
                    
                    color: white;
                    font-size: 48px;
                    perspective: 1000px;
                }
                .headerLink{
                    font-size: 48px;
                    color: white;
                }

                .headerLink:hover{
                    background-color: black;
                    font-size: 70px;
                }

            `}</style>
        </>
    )

}