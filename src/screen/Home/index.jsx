import React from 'react'

import "./style.css";

import foto_fundo from '../../image/Intro.png'
import foto_saiba from '../../image/coffe_saiba.png'
import foto_saiba2 from '../../image/cafe_saiba2.png'


const Home = () => {
  return (
    <>
      <div className='conteiner'>
        <div className='Top-image'>
          <img src={foto_fundo} alt="foto_Fundo" />
        </div>

        <div className="Variedade_Cafe">
          <section>
            <div>
              <img src={foto_saiba} alt="foto_saiba" />
            </div>
            <div className='conteinertext'>
              <h3>saiba</h3>
              <h2>O Verdadeiro Café</h2>
              <p>Apenas na Easy Coffee você encontra o verdadeiro café para preparo em sua casa, com grãos selecionados e preparados com o maior carinho da capital. </p>
              <p>Com as nossas dicas sobre o produto e modo de preparo você será capaz de extrair 100% do que o produto tem a oferecer.</p>

            </div>
          </section>
        </div>
        <div className="Variedade_Cafe">
          <section>
            <div className='conteinertext'>
              <h3>experimente</h3>
              <h2>Introduzindo Café Pour-over </h2>
              <p>O método Pour-Over envolve despejar água quente através de borra de café em um filtro. A água escoa através do café e é filtrada para uma jarra ou caneca. Pour-Over também é conhecido como filter coffee ou drip coffee, embora esses termos também incluam cervejarias em lote.  </p>
              <p>O que diferencia o derramamento é que ele é feito deitando-se a água manualmente sobre o café. Portanto, você pode ouvi-lo chamado de preparação manual ou preparação manual.</p>
            </div>
            <div>
              <img src={foto_saiba2} alt="foto_sabia2" />
            </div>
          </section>
        </div>
        <div className="Variedade_Cafe">
          <section>
            <div>
              <div className="google-map-code">
              <iframe className="Map-home" title="Map-home" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3225.2107977306855!2d-48.04477738264883!3d-15.990405573808129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xff49a03cdbd68a9e!2sUED%20-%20Unidade%20de%20Ensino%20e%20Doc%C3%AAncia!5e0!3m2!1spt-BR!2sbr!4v1615992316144!5m2!1spt-BR!2sbr" 
                width="600" 
                height="450" 
                style={{ border: 4 }} 
                aria-hidden="false" 
                ></iframe>
              </div>
            </div>
            <div className='conteinertext'>
              <h3>Contato</h3>

              <p>Brasília</p>
              <p></p>
              <p>Endereço</p>
              <p>St. Central - Gama,</p>
              <p>Brasília - DF, 72405-610</p>
              <p>info@meusite.com \  (61) 3456-7890</p>
              <p>Horário de Funcionamento</p>
              <p>Segunda – Sexta  7:00 – 20:00</p>
              <p>Sábado    9:00 – 20:00</p>
              <p>Domingo    9:00 – 18:00</p>
            </div>
          </section>
        </div>
      </div>


    </>
  )
}

export default Home;