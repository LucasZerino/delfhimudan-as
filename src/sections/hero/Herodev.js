import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect'


class Hero extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            height: 0,
            width: 0
        }
    }

    updateDimensions = () => {
        if (this.state.height !== window.innerHeight) {
            this.setState({height: window.innerHeight})
        }
        if (this.state.width !== window.innerWidth) {
            this.setState({width: window.innerWidth})
        }
    }

    
    componentDidMount() {
        this.setState({height: window.innerHeight, width: window.innerWidth})
        window.addEventListener('resize', this.updateDimensions)
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions)
    }

    render() {

        const Section = styled.section`
        
            position: relative;
            .particles {
                position: absolute;
                width: 100%;
                height: 100%;
            }
            background-image: url(${this.props.background.childImageSharp.fluid.src});
            background-size: cover;
            background-repeat: no-repeat;
        `

        const Overlay = styled.div`
            width: 100%;
            display: flex;
            align-items: center;
            background: rgba(42,21,9,.4);
        `

        const Heading1 = styled.h1`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Teko:wght@300&display=swap');
            margin-top: 500px;
            font-size: 60px;
            font-family: Teko;
            line-height: 70px;
            color: #e8590c;
            font-weight: 400;
            text-transform: uppercase;
            @media (max-width:1700px) { 
                margin-top: 350px;
            }
            @media (max-width:767px) {
                font-size: 30px;
                line-height: 20px;
            }
            @media (max-width:500px) {
                position: relative;
                top: -50px;
                left: 50%;
                transform: translateX(-50%);
                width: 400px;
                font-size: 25px;
            }
        `

        const Heading2 = styled.h2`
            font-size: 40px;
            color: #fff;
            font-weight: 800;
            text-transform: uppercase;
            background: #fff;
           -webkit-background-clip: text;
           -webkit-text-fill-color: transparent;
            @media (max-width:1700px) { 
                font-size: 30px;
            }
            @media (max-width:1400px) {
                font-size: 25px;
            }
            @media (max-width:1250px) {
                font-size: 20px;
            }
            @media (max-width:500px) {
                position: relative;
                top: -50px;
                left: 50%;
                transform: translateX(-50%);
                width: 400px;
                font-size: 15px;
            }
        `

        const Type = styled.div`
            font-size: 50px;
            line-height: 50px;
            color: #fff;
            text-transform: uppercase;
            @media (max-width:1600px) { 
                font-size: 40px;
            }
            @media (min-width:768px) and (max-width:1500px) {
        
            }
            @media (max-width:600px) {
                font-size: 20px;
            }
            span {
                font-family: Teko;
            }
        `
        const Content = styled.div`
            width: 100vw;
            height: 100vh;
            position: relative;
            z-index: 10
            text-align: center;
            display: flex;
            flex-direction: column;
            text-align: center;
            .simular{
                position: relative;
                display: inline-block;
                font-size: 40px;
                padding: 8px 20px;
                background: #e85a0c;
                margin-top: 105px;
                border-radius: 20px;
                color: #fff;
                text-decoration: none;
                font-weight: 600;
                box-shadow: 0 10px 20px rgba(0,0,0,0.2);
                transition: 1s;
                width: 400px;
                left: 50%;
                transform: translateX(-50%);
                top: -40px;
            }
            .simularmobile{
                position: relative;
                display: inline-block;
                font-size: 20px;
                padding: 8px 20px;
                background: #e85a0c;
                margin-top: -25px;
                border-radius: 20px;
                color: #fff;
                text-decoration: none;
                font-weight: 600;
                box-shadow: 0 10px 20px rgba(0,0,0,0.2);
                transition: 1s;
                width: 300px;
                left: 50%;
                transform: translateX(-50%);
                top: -40px;
            }
            .simularmobile:hover{
                color: #e85a0c;
                background: #fff;
            }
            .simular:hover{
                color: #e85a0c;
                background: #fff;
            }
            .sep{
                display: flex;
                flex-direction: row;
                justify-self: center;
                height: 100%;
                width: 100%;
                align-items: center;
                justify-content: center;
            }
            .sep1
                flex: 8;
                margin-left: 5vw;
            }
            .texto{
                display: flex;
                flex-direction: column;
            }
            .sep2{
                display: flex;
                justify-content: center;
                flex: 1;
                height: 100%;
            }
            .center{
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
            }
            @media (max-width:1700px) { 
                .simular{
                    margin-top: -10px;
                }
            }
            @media (max-width:1600px) {
                .sep1
                flex: 8;
                margin-left: 2vw;
                }
                .texto{
                display: flex;
                flex-direction: column;
                }
            }
            @media (max-width: 500px){
                .simular{
                    display: none;
                }
            }
            @media (min-width: 500px){
                .simularmobile{
                    display: none;
                }
            }
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
            @media (max-width:1700px) { 
                width: 800px;
            }
            @media (max-width:1250px) {
                width: 500px;
            }
            @media (max-width:500px) {
                position: relative;
                top: -50px;
                width: 150px;
                font-size: 15px;
            }
        `

        

        return (
            
                <Section id="HOME">
                    <Overlay style={{height: `${this.state.width > 500 ? this.state.height : 350}px`}}>
                        
                            <Content>
                                <div className='sep'>
                                    <div className='sep1'>
                                        <div className='ceter'>
                                            <div className='texto'>
                                            <Heading1>
                                            Escolha o plano de Saúde certo para você!
                                        </Heading1>
                                        <Heading2>
                                        PLANO DE SAÚDE INDIVIDUAL E FAMILIAR, VOCÊ ENCONTRA AQUI!
                                        </Heading2>
                                        <Separator/>
                                        <a className='simularmobile' href="#SIMULAR">SIMULAR AGORA</a>
                                        <Type>
                                            <Typewriter
                                                options={{
                                                strings: [
                                                    'Unimed',
                                                    'Amil',
                                                    'Hapvida',
                                                    'Humana Saúde',
                                                    'Bradesco Saúde',
                                                    'SulAmérica Saúde',
                                                    'Delfhi Odonto',
                                                ],
                                                autoStart: true,
                                                loop: true,
                                                }}
                                            />
                                        </Type>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className='simular' href="#SIMULAR">SIMULAR AGORA</a>
                                
                            </Content>
                  
                    </Overlay>
                </Section>
        )
    }
}
export default props => (
    <StaticQuery
      query={graphql`
      query {
        background: file(relativePath: {eq: "background-poly.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              src
            }
          }
        }
        webexpertIcon: file(relativePath: {eq: "icons/web.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        mobileIcon: file(relativePath: {eq: "icons/mobile.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        seoIcon: file(relativePath: {eq: "icons/seo.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
      }
      `}
      render={({ 
        background, 
        webexpertIcon, 
        mobileIcon, 
        seoIcon}) => <Hero  
        background={background} 
        webexpertIcon={webexpertIcon} 
        mobileIcon={mobileIcon} 
        seoIcon={seoIcon}
        {...props} />}
    />
  )