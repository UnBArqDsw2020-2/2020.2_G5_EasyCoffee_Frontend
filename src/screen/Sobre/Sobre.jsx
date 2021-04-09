import React from "react";

import Navbar from '../../components/Navbar/index'
import Flooter from '../../components/Footer'

import Top_img from '../../image/Rectangle 25.png'
import img_ex from '../../image/image 5.png'


export default function Sobre_Cafe() {
  
  return (
    <>
    <Navbar sobre/>
    <div className='conteiner'>
      <div className='Top-image'>
        <img src={Top_img} alt="Top_img"/>
      </div>
      <div className="Variedade_Cafe">
        <section>
          <div>
            <img src={img_ex} alt="img_ex"/>
          </div>
          <div className='conteinertext'>
       
            <h2>Arábica</h2>
            <p>Arábica é uma espécie de café natural da Arábia ou da Etiópia, supostamente uma das primeiras espécies de café a ser cultivada. A espécie arábica produz cafés de qualidade, finos e requintados, e possui aroma intenso e os mais diversos sabores, com inúmeras variações de corpo e acidez. O café tradicional é composto por esta planta. </p>
            

          </div>
        </section>
      </div>
      <div className="Variedade_Cafe">
        <section>
          <div className='conteinertext'>
            <h2>Robusta</h2>
            <p>Robusta é uma espécie de café originária da África Ocidental. É cultivado principalmente na África e no Brasil onde é chamado às vezes de Conillon que é corruptela da palavra Kouiliou. É também cultivado no Sudeste asiático onde os colonizadores franceses o introduziram no final do séc. XIX. Nos últimos anos o Vietnã, que produz apenas robusta, ultrapassou o Brasil, a Índia e a Indonésia como o maior exportador do mundo. Aproximadamente um terço do café produzido no mundo é robusta. Como os grãos de arábica são considerados superiores, o robusta fica normalmente limitado a tipos de café de escalão inferior como complemento. É no entanto incluído nos cafés instantâneo e expresso de forma a tornar o café cremoso. O robusta contém duas vezes mais cafeína do que o arabica </p>
          </div>
          <div>
            <img src={img_ex} alt="img_ex"/>
          </div>
        </section>
      </div>

    </div>

    <Flooter/>
  </>
   
  );
}