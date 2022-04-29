import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import RevealContent from '../../components/reveal-content/index'
import Unimed from './imgs/unimed.png'
import Amil from './imgs/amil.png'
import Bradesco from './imgs/bradesco.png'
import Delfhi from './imgs/delfhi.png'
import Hapvida from './imgs/hapvida.png'
import Humana from './imgs/humana.png'
import Sulamerica from './imgs/sulamerica.png'
import AnimatedHeading from '../../components/animated-heading2'
import Item from './item'

class AboutOne extends React.Component {

    shouldComponentUpdate() {
      return false
    }
    
      render() {
          const Section = styled.section`
              position: relative;
              overflow: hidden;
              background-color: #FFF;
              .particles {
                  position: absolute;
                  width: 100%;
                  height: 100%;
              }
  
          `
  
          const AboutContainer = styled(Container)`
              padding: 250px 0 100px 0;
              .cardContainer{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                max-width: 1200px;
                flex-wrap: wrap;
            }
            .cardContainer .card{
                position: relative;
                min-width: 320px;
                height: 440px;
                box-shadow: inset 5px 5px 5px rgba(0,0,0,0.05),
                            inset -5px -5px 5px rgba(255,255,255,0.5),
                            inset 5px 5px 5px rgba(0,0,0,0.05),
                            inset -5px -5px 5px rgba(255,255,255,0.5);
                border-radius: 15px;
                margin: 30px;
            }
            
            .cardContainer .card .box{
                position: absolute;
                top: 20px;
                left: 20px;
                right: 20px;
                bottom: 20px;
                background: #fff;
                box-shadow: 0 10px 20px rgba(0,0,0,0.1);
                border-radius: 15px;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: 0.5s;
            }
            
            
            .cardContainer .card:hover .box {
                transform: translateY(-50px);
                box-shadow: 0 10px 40px rgba(0,0,0,0.2);
                background: linear-gradient(45deg, #fff,#e85a0c );
            }
            
            .cardContainer .card .box .content{
                padding: 20px;
                text-align: center;
            }
            
            .cardContainer .card .box .content h2{
                position: absolute;
                font-family: 'Teko';
                font-weight: 500;
                top: -10px;
                right: 30px;
                font-size: 4em;
                color: rgba(232, 89, 12, 0.021);
                transition: 0.5s;
                pointer-events: none;
            }
            .cardContainer .card:hover .box .content h2{
                color: rgba(255, 255, 255, 0.082);
            }
            
            .cardContainer .card .box .content h3{
                font-family: 'Teko';
                font-size: 2.4em;
                color: #777;
                z-index: 1;
                transition: 0.5s;
            }
            
            .cardContainer .card:hover .box .content h3{
                color: #fff;
            }
            
            .cardContainer .card .box .content p{
                font-family: 'Teko';
                font-size: 3em;
                font-weight: 300;
                color: #777;
                z-index: 1;
                transition: 0.5s;
            }
            
            .cardContainer .card .box .content a{
                position: relative;
                display: inline-block;
                padding: 8px 20px;
                background: #fff;
                margin-top: 15px;
                border-radius: 20px;
                color: #e85a0c;
                text-decoration: none;
                font-weight: 400;
                box-shadow: 0 10px 20px rgba(0,0,0,0.2);
                transition: 2s;
            }

            .cardContainer .card:hover .box .content a{
                color: #fff;
                background: #e85a0c;
            }
            @media (max-width:1400px) {
                
            }
              @media (max-width: 800px){
                .cardContainer{
                    display: flex;
                    position: relative;
                    margin-top: 100px;
                    width: 100%;
                    justify-content: center;
                }   
                .card{
                    position: relative;
                }
                .content{
                    position: relative;
                    left: 50%;
                    transform: translateX(-50%);
                }
            }
          `
          const Heading = styled.h1`
              font-size: 40px;
              font-family: Teko;
              color: black;
              text-transform: uppercase;
              @media (max-width:1399px) {
                  font-size: 70px;
                  line-height: 70px;
              }
              @media (max-width:900px) {
                  font-size: 37px;
                  line-height: 30px;
                  text-align: center;
              }
          `
          const Color = styled.span`
              color: #e85a0c;
              font-size: 50px;
              font-family: Teko;
              text-transform: uppercase;
              letter-spacing: 2px;
              @media (max-width:1399px) {
                  font-size: 80px;
                  line-height: 80px;
              }
              @media (max-width:900px) {
                  font-size: 40px;
                  line-height: 40px;
              }
          `
  
          const LeftCol = styled(Col)`
              display: flex;
              align-items: center;
              .cardContainer{
                  position: relative;
                  top: 50%;
          `
          const Separator = styled.div`
          position: relative;
          display: flex;
          justify-self: center;
          align-self: center;
          height: 5px;
          width: 1200px;
          background-color: #e8590c;
          margin-bottom: 30px;
          align-self: center;
         
          @media (max-width:500px) {
              position: relative;
              top: -50px;
              width: 150px;
              font-size: 15px;
          }
      `


          const BottomContent = styled.div`
          position: relative;
          display: flex;
          flex-direction: column;
          width: 100%;
          justify-content: center;
          top: -200px;
          z-index: 2;
          .allcards{
              display: flex;
              flex-direction: column;
              width: 100%;
              height: 600px;
          }
          .col1{
              display: flex
          }
          .col2{
            margin-top: -30px;
              display: flex;
          }
        
        @media (max-width:1000px) {
            margin-top: -600px;
            height: 1900px;
          .col1{
              flex-direction: column;
          }
          .col2{
            flex-direction: column;
        }
        }
        .lastcontainer{
            margin-top:1000px;
        }
        @media (max-width:500px) {
            .card{
                height: 210px;
                width: 210px;
                background-color: white;
                transform: scale(0.7);
                border-radius: 8px;
                box-shadow: 0 0 10px 0.5px white;
            }
            .card.ac{
               margin-top:-200px;
            }
            .card.ad{
                margin-top:-400px;
             }
             .card.ae{
                margin-top:-600px;
             }
             .card.af{
                margin-top:-750px;
             }
             .card.ag{
                margin-top:-950px;
             }
             .card.ah{
                margin-top:-1150px;
             }
            .card .info{
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
            }
            .card .info .name{
                font-size: 15px;
                font-weight: 600;
                color: #f79f08;
                position: absolute;
                top: 20px;
                letter-spacing: 2px;
            }
            .divider{
                background-color: #e85a0c;
                height: 1.5px;
                width: 100px;
                position: absolute;
                top: 40px;
            }
            .bio{
                position: absolute;
                top: 60px;
                color: #000000;
                line-height: 28px;
                font-size: 15px;
                text-align: center;
            }
            .button{
                position: absolute;
                bottom: 15px;
                background-color: #f79f08;
                border: none;
                font-size: 15px;
                cursor: pointer;
                color: white;
                text-decoration: none;
            }
            .photo{
                height: 100%;
                width: 100%;
                background-repeat: no-repeat;
                position: absolute;
                bottom: 0;
                background-size: 100% 100%;
                border-radius: 8px;
                transition: 1s;
            }       
            .card:hover .name{
                display: inline;
            }
            
            .card:hover .photo{
                transform: scale(0.5, 0.35) translateY(-350px);
                border-radius: 50%;
                background-size: 100% 100%;
                background-position: 0 0;
             }     
             .card .a2{
                position: absolute;
                bottom: -70px;
                font-size: 25px;
                color: whitesmoke;
                background-color: #ff6e20;
                width: 100%;
                padding: 5px 0;
                font-size: 27px;
                font-family: 'Poppins';
                font-weight: 600;
                text-align: center;
                letter-spacing: 2px;
                text-decoration: none;
            }       
      `


  
          return(
       
              <Section id="PLANOS">
              <div className='particles'>  </div>
                  <AboutContainer>
                      <Row>
                          <LeftCol md={12}>
                          <BottomContent>
                            <AnimatedHeading  text="Nossos Planos disponíveis" />
                            <div className='allcards'>
                                <div className='col1'>
                                        <Item>
                                        <div className="card">
                                            <div className="info">
                                                <div className="name">DelfhiOdonto</div>
                                                <div className="divider"></div>
                                                <div className="bio">
                                                O que há de mais tecnológico e inovador em tratamento dentário!

                                                </div>
                                                <a href='#SIMULAR' className="button">SIMULAR</a>
                                            </div>
                                            <img className='photo' src={Delfhi} alt='Logo'/>
                                        </div> 
                                        </Item>
                                        <Item>
                                        <div className="card ac">
                                            <div className="info">
                                                <div className="name">Humana</div>
                                                <div className="divider"></div>
                                                <div className="bio">
                                                    A vida é feita de escolhas: A melhor é ter saúde!
                                                </div>
                                                <a href='#SIMULAR' className="button">SIMULAR</a>
                                            </div>
                                            <img className='photo' src={Humana} alt='Logo'/>
                                        </div> 
                                        </Item>
                                        <Item>
                                        <div className="card ad">
                                            <div className="info">
                                                <div className="name">Hapvida</div>
                                                <div className="divider"></div>
                                                <div className="bio">
                                                Cuidamos da saúde de toda sua família! 
                                                </div>
                                                <a href='#SIMULAR' className="button">SIMULAR</a>
                                            </div>
                                            <img className='photo' src={Hapvida} alt='Logo'/>
                                        </div> 
                                        </Item>
                                        <Item>
                                        <div className="card ae">
                                            <div className="info">
                                                <div className="name">Unimed</div>
                                                <div className="divider"></div>
                                                <div className="bio">
                                                Com laboratórios próprios, entregamos o melhor pra você! 
                                                </div>
                                                <a href='#SIMULAR' className="button">SIMULAR</a>
                                            </div>
                                            <img className='photo' src={Unimed} alt='Logo'/>
                                        </div> 
                                        </Item>
                                        </div>
                                        <div className='col2'> 
                                        <Item className='col2item'>
                                        <div className="card af">
                                            <div className="info">
                                                <div className="name">Bradesco</div>
                                                <div className="divider"></div>
                                                <div className="bio">
                                                    Planos completos para sua família ou para sua empresa! 
                                                </div>
                                                <a href='#SIMULAR' className="button">SIMULAR</a>
                                            </div>
                                            <img className='photo' src={Bradesco} alt='Logo'/>
                                        </div> 
                                        </Item>
                                        <Item className='col2item'>
                                        <div className="card ag">
                                            <div className="info">
                                                <div className="name">Sulamérica</div>
                                                <div className="divider"></div>
                                                <div className="bio">
                                                    Planos sob medida pra cuidar da sua Saúde integral! 
                                                </div>
                                                <a href='#SIMULAR' className="button">SIMULAR</a>
                                            </div>
                                            <img className='photo' src={Sulamerica} alt='Logo'/>
                                        </div> 
                                        </Item>
                                        <Item className='col2item'>
                                        <div className="card ah">
                                            <div className="info">
                                                <div className="name">Amil</div>
                                                <div className="divider"></div>
                                                <div className="bio">
                                                    Cuidando do seu bem mais precioso, sua saúde! 
                                                </div>
                                                <a href='#SIMULAR' className="button">SIMULAR</a>
                                            </div>
                                            <img className='photo' src={Amil} alt='Logo'/>
                                        </div> 
                                        </Item>
                                            </div>
                                        <Separator/>
                                    </div>      
                    </BottomContent>
                    </LeftCol>
                    <div className='lastcontainer'>


                    </div>

                          <LeftCol md={6}>
                              <RevealContent>
                                  <Heading>
                                      Desde 2001 <Color>Ajudamos pessoas </Color> 
                                       que buscam mais qualidade de vida com 
                                      <Color> o preço que cabe no bolso.</Color>
                                  </Heading>
                              </RevealContent>
                          </LeftCol>
                          <Col md={6}>
                              <Row>
                              <RevealContent>
                                
                                <div class="cardContainer">
                                    <div class="card">
                                        <div class="box">
                                            <div class="content">
                                                <h2>DELFHI</h2>
                                                <h3>PLANOS COMPLETOS A PARTIR DE</h3>
                                                <p>
                                                    R$139,90
                                                </p>
                                                <a href="#SIMULAR">SIMULAR AGORA</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </RevealContent>
                              </Row>
                          </Col>
                      </Row>
                  </AboutContainer>
              </Section>
          )
      }
  
  }

  export default AboutOne