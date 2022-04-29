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
            width: 400px;
            height: 600px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 40px;
            position: relative;
            z-index: 5;
            .butt{
              display: block;
              height: 50px;
              width: 186px;
              position: relative;
              border: none;
              left: 50%;
              transform: translateX(-50%);
              overflow: hidden;
              transition: .5s;
              background-color: #fff;
              position: relative;
              top: 0;
              color: #fff;
              z-index: 10;
              text-transform: uppercase;
              letter-spacing: 2px;
              background: #e85a0c;
              border-radius: 10px;
            }
              .butt:hover {
                background: #fff;
                color: #e85a0c;
              }
            h6{
              text-align: center;
              font-size: 7px;
              color: #fff;
            }
            @media (max-width: 767px) {
              left: 50%;
              transform: translateX(-50%);
            }
        `

        const Heading = styled.h2`
            width: 350px;
            font-size: 40px;
            font-family: Teko;
            color: #fff;
            text-align: center;
        `

        const InputElement = styled.div`
            width: 300px;
            margin: 20px 0;
            input::placeholder {
              color: #fff;
            }
            .contato{
              color: white;
                text-align: start;
                margin-left: 8px;
            }
            .marcadores{
              display: flex;
              width: 300px;
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
        function sendMail(e){
          e.preventDefault();
          
          emailjs.sendForm(
            'service_ul19imr',
            'template_eo5298l',
            e.target,
            '41-VHSsKieE-uoWbt'
            ).then(res=>{
              console.log(res);
            }).catch(err=> console.log(err));
            e.target.reset()
          }



        return(
          <ContactForm>
            <Heading>
            Simule Agora
            <h6>Sem compromisso</h6>
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
                        <input type="radio" name="user_contato" value="Whatsapp" checked/>&nbsp;Entre em contato via whatsapp
                    </label>
                    <label class="marcar">
                        <input type="radio" name="user_contato" value="Telefone"/>&nbsp;Entre em contato via telefone
                    </label>
              </div>
            </InputElement>
            <input type="hidden"/>
            <h6><span>Em respeito a LGPD, não compartilharemos seus dados pessoais.</span></h6>
            <button className='butt' type='submit'>Quero simular</button>
          </form>
      </ContactForm>
        )
    }

}

export default ContactThreeForm