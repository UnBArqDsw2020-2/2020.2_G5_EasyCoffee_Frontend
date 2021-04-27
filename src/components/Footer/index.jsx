import React, { useEffect, useState } from "react";
import ImgeTop from '../../image/chevron-down.png'

import './styles.css';


export function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (

    <div className="card">
      <div className='Flooter'>
        {isVisible &&
          <div className='button-ScrollToTop' onClick={scrollToTop}>

            <section>
              <img src={ImgeTop} alt='Go to top' />
              <p>Voltar ao topo</p>
            </section>
          </div>}
        <p>{"© EASY COFFEE 2021."}</p>
        <p>{"Privacy & cookie policy"}</p>

      </div>
    </div>
  );
}