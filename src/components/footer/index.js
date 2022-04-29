import React from 'react'
import styled from 'styled-components'
import Mark from './imgs/Webckmark.png'
class Footer extends React.Component{

    render() {
        const FooterMain = styled.div`
            background-color: #555;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
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
           
                margin-left: 10px;
                margin-top: 10px;
                font-size: 10px;
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
            <div className='descricao'>
                <h1 className='criado'>Criado e desenvolvido por Webck Soluções</h1>
                <h1 className='cop'>Copyright © 2022.</h1>
            </div>
            <div className='position'>
                <a href='https://webck.com.br/' target="_blank"><img className='mark' src={Mark}/></a> 
            </div>
        </FooterMain>
        )
    }
}
export default Footer