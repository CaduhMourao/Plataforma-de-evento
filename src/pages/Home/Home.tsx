import React from 'react'
import { CheckCircle, VideoCamera, DeviceMobile, Monitor, Lightning } from "phosphor-react";
import { useState } from 'react'
import logoImg from '../../assets/logo.svg';
import react from '../../assets/react.svg';
import image from '../../assets/image.png'
import logoFooter from '../../assets/logoFooter.png'
import fundoReact from '../../assets/fundoReact.svg'

export function Home() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header>
        <div>
          <img src={fundoReact} alt="" />
          <img src={logoImg} alt="" />
          <h1>Construa uma aplicação completa, do zero, com React JS</h1>
          <p>Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.</p>
        </div>

        <div>
          <h2>Inscreva-se gratuitamente</h2>
          <form action="" method="post">
            <input type="text" name="" id="" placeholder='Seu nome completo'/>
            <input type="email" name="" id="" placeholder='Digite seu email'/>
            <button type="submit">Garantir minha vaga</button>
          </form>
        </div>
      </header>

      <section>
        <div className="bg-[#000000]">
          <CheckCircle color="rgba(41, 167, 70, 1)" />
          <VideoCamera color="rgba(215, 65, 84, 1)" />
          <DeviceMobile color="rgba(3, 102, 214, 1)" />
          <Monitor color="rgba(117, 190, 255, 1)" />
          <Lightning color="rgba(213, 147, 104, 1)" />
        </div>

        <div>
          <img src={react} />
        </div>

        <div>
          <img src={image} alt="" />
        </div>
      </section>

      <footer>
        <img src={logoFooter} alt="" />
        <p>Rocketseat - Todos os direitos reservados</p>
        <a href="">Políticas de privacidade</a>
      </footer>
    </div>
  )
}