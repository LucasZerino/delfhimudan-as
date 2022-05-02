import React from 'react'
import styled, { keyframes } from 'styled-components'
import emailjs from 'emailjs-com'

class ContactThreeForm extends React.Component {
      constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            phone: "",
            menssagem: "",
            error: false
        }
    }

    formSubmit() {
      if (this.state.name === "" || this.state.email === "" || this.state.message === "") {
          this.setState({error: true})
      } else {
          this.setState({error: false})
      }
      this.forceUpdate()
    }

    
    check(val) {
        if (this.state.error && val === "") {
            return false
        } else {
            return true
        }
    }

    shouldComponentUpdate(nextProps, nextState) { 
      return false;
    }

    render() {

        const Separator = styled.div`
            height: 5px;
            width: 50px;
            background-color: #fff;
            margin-bottom: 20px;
            margin-left: 6px;
        `

        const ContactForm = styled.div`
            top: -50px;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 40px;
            position: relative;
            z-index: 5;
            .form{
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            .form.active{
              display: none;
            }
            .butt{
              display: block;
              height: 50px;
              width: 186px;
              position: relative;
              border: none;
              overflow: hidden;
              transition: .5s;
              background-color: #fff;
              margin-top: 30px;
              position: relative;
              top: -20px;
              color: #e85a0c;
              z-index: 10;
              text-transform: uppercase;
              letter-spacing: 2px;
              background: #fff
            }
              .butt:hover {
                background: rgba(232,232,232,.8);
                color: #e85a0c;
              }
              h5{
                text-align: center;
                font-size: 12px;
                color: #fff;
              }
            h6{
              text-align: center;
              font-size: 10px;
              color: #fff;
            }
            .seis{
              width: 80%;

            }
            @media (max-width: 500px) {
              margin-top: -200px;
              background: rgba(232,90,12, .7);
              width: 100%;
              border-radius: 50px;
            }
        `

        const Heading = styled.h2`
            width: 350px;
            font-size: 40px;
            font-family: Teko;
            color: #fff;
            text-align: center;
            .simule{
              margin-top: 50px;
              font-size: 50px;
            }
            .compromisso{
              margin-top: -10px;
              font-size: 15px;
            }
        `

        const InputElement = styled.div`
            width: 300px;
            margin: 20px 0;
            input::placeholder {
              color: #fff;
            }
            .contato{
              color: white;
              margin-left: 8px;
            }
            .marcadores{
            
              left: 0;
              display: flex;
              width: 100%;
              justify-content: space-around;
              color: white;
            }
           
        `

        const ErrorInputAnimation = keyframes`
            0% {
              border-bottom: 1px solid #111;
            }
            100% {
              border-bottom: 1px solid #ff0000;
            }
        `
        

        const Input = styled.input`
            width: 100%;
            background-color: transparent;
            border: none;
            border-bottom: 1px solid #fff;
            padding: 10px 5px;
            border-radius: 0;
            color: #fff;
            transition: .5s;
            input::placeholder {
              color: #fff;
            }
            &:focus {
              border-bottom: 1px solid #e85a0c;
              outline: none;
            }
            &.error {
              animation: ${ErrorInputAnimation} 1s forwards;
            }
            

        `
        function Agradecer () {
          alert("Obrigado, já entraremos em contato!")
        }
      

        function sendMail(e){
          e.preventDefault();
          
          emailjs.sendForm(
            'service_zkaif7h',
            'template_7b3k2jn',
            e.target,
            'uPupkUUqsmir4hGB0'
            ).then(res=>{
              console.log(res);
            }).catch(err=> console.log(err));
            e.target.reset()
          }



        return(
          <ContactForm>
            <Heading>
              <br></br>
              <br></br>
              <br></br>
           <h1 className='simule'> Simule Agora</h1>
            <h6 className='compromisso'>Sem compromisso</h6>
            </Heading>
          <Separator />
          <form className='form'
           onSubmit={sendMail}
          >
            <InputElement>
              <Input type='text' name='user_name' placeholder="Nome"/>
            </InputElement>
            <InputElement>
              <Input type="text" name="user_telefone" placeholder="Telefone" required/>
            </InputElement>
            <InputElement>
              <Input type="text" name="user_cidade" placeholder="Cidade"/>
            </InputElement>
            <InputElement>
            <div className="marcadores">
                     <label className="marcar">
                        <input  type="radio" name="user_plano" value="Pessoa Física" checked/>&nbsp;Pessoa Fisica
                    </label>
                    <label class="marcar">
                        <input type="radio" name="user_plano" value="Pessoa Jurídica"/>&nbsp;Pessoa Jurídica
                    </label>
                </div>
              <div className='contato'>
              <label class="marcar">
                        <input type="radio" name="user_contato" value="Whatsapp" checked/>&nbsp;Quero contato via whatsapp
                    </label>
                    <label class="marcar">
                        <input type="radio" name="user_contato" value="Telefone"/>&nbsp;Quero contato via telefone
                    </label>
              </div>
            </InputElement>
            <input type="hidden"/>
            <div className='seis'>
            <h6>Fique tranquilo em deixar seus dados, pois os mesmos estarão sob total sigilo de acordo com a LGPD. Entraremos em contato no horário e da maneira como você sinalizar, sem incomodarmos o seu dia.
            Em respeito a LGPD, não compartilharemos seus dados pessoais.
            </h6>
            
            </div>
            <button className='butt' type='submit' onClick={Agradecer}>Quero simular</button>
          </form>
      </ContactForm>
        )
    }

}

export default ContactThreeForm