import React from 'react'
import styled from 'styled-components'
class Footercontact extends React.Component{

    render() {
        const FootercontactMain = styled.div`
          background-color: rgba(232,90,12,.9);
            height: 150px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            h1{
                text-align: start;
                color: gray;
                font-size: 10px;
            }
            .corretora{
              display: flex;
              width: 100%;
              justify-content: space-around;
          }
          .corretora .span1{
            display: flex;
            justify-content: center;
            font-weight: 600;
            color: #fff;
            font-size: 20px;
          }
          .corretora .span2{
            display: flex;
            justify-content: end;
            font-weight: 600;
            color: #fff;
            font-size: 20px;
          }
          .desc1{
            color: #fff;
            font-size: 20px;
            font-weight: 300;
          }
          .desc2{
            color: #fff;
            font-size: 20px;
            font-weight: 300;
            text-align: end;
          }
          @media (max-width:1000px) {
            .desc1{
              font-size: 15px;
            }
            .desc2{
              font-size: 15px;
            }
          }
          @media (max-width:750px) {
            .desc1{
              font-size: 10px;
            }
            .desc2{
              font-size: 10px;
            }
          }
          @media (max-width:500px) {
            .desc1{
              font-size: 7px;
            }
            .desc2{
              font-size: 7px;
            }
          }
        `

        return (
        <FootercontactMain>
           <div className='corretora'>
               <div className='left'>

                    <h1 className='desc1'>Corretora de Seguros Adm e Rpres LTDA</h1>
                    <h1 className='desc1'>Rua Lorem Ysulun, 371 Natal/RN</h1>
                    <h1 className='desc1'>atendimento@webck.com.br</h1>
               </div>
               <div className='right'>
      
                    <h1 className='desc2'>CPNJ: 004748474844548/8784</h1>
                    <h1 className='desc2'>CEP: 59060-400</h1>
                    <h1 className='desc2'>Telefone: (84) 3232-32323 | Whatsapp: (84) 99999-9999</h1>
               </div>
           </div>
          </FootercontactMain>
        )
    }
}
export default Footercontact