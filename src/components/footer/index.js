import React from 'react'
import styled from 'styled-components'
import Mark from './imgs/Webckmark.png'
class Footer extends React.Component{

    render() {
        const FooterMain = styled.div`
            background-color: #555;
            height: 50px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            h1{
                text-align: center;
                color: gray;
                font-size: 10px;
            }
            .mark{
                position: relative;
                width: 100px;
                background: transparent;
                left: 50%;
                transform: translateX(-50%);
            }
            .cop{
              
                margin-top: 10px;
                margin-left: 10px;
                font-size: 10px;
              
            }
            .criado{
                color: gray;
                font-size: 10px;
                text-decoration: none
            }
            .criado:hover{
                color: #00f9f9;
            }
            .descricao{
                position: absolute;
                display: flex;
                margin-top: 10px;
                left: 10px;
                color: gray;
            }
            @media (max-width:800px) {
                .position{
                    display: flex;
                    width: 100%;
                    align-items: flex-end;
                    justify-content: flex-end;
                }
                .mark{
                    margin-right: 20px;
                }
            }
            @media (max-width:500px) {
                .mark{
                    display: none;
                }
                .descricao{
                    text-align: center;
                }
            }
        `

        return (
        <FooterMain>
            <h1>
                Segunda a sexta, 08h às 17h
                atendimento@delfhicorretora.com.br​<br/>
                <span>Telefone</span> (84) 3211-1000
                <span> Whatsapp</span>(84) 99643-5898
            </h1>
                <a className='criado' href='https://webck.com.br/' target="_blank" >Copyright © 2022 - criado e desenvolvido por Webck Soluções - 21.453.885/0001-54</a>
        </FooterMain>
        )
    }
}
export default Footer