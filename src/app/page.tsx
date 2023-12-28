"use client"
import Image from 'next/image'
import Head from 'next/head'
import { sendPaymentForm } from "../lib/api";

import { useEffect } from 'react';

export default function Home() {

  const handleSubmit = () => {
    console.log("submitting");
    sendPaymentForm({ phoneNumber: "12345678" });
    console.log("submitted");
  };

  useEffect(() => {
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    const carousel = document.querySelector('.carousel');
    const listHTML = document.querySelector('.carousel .list');
    const seeMoreButtons = document.querySelectorAll('.seeMore');
    const backButton = document.getElementById('back');

    if (!nextButton || !prevButton || !carousel || !listHTML || seeMoreButtons.length === 0) {
      console.error('Unable to find one or more required elements.');
      return;
    }

    const showSlider = (type: 'next' | 'prev') => {
      nextButton.style.pointerEvents = 'none';
      prevButton.style.pointerEvents = 'none';

      carousel.classList.remove('next', 'prev');
      const items = document.querySelectorAll('.carousel .list .item');

      if (type === 'next') {
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
      } else {
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
      }

      setTimeout(() => {
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
      }, 2000);
    };

    const seeMoreButtonClickHandler = () => {
      carousel.classList.remove('next', 'prev');
      carousel.classList.add('showDetail');
    };

    const backButtonClickHandler = () => {
      carousel.classList.remove('showDetail');
    };

    nextButton.onclick = () => {
      console.log('next');
      showSlider('next');
    };

    prevButton.onclick = () => {
      console.log('prev');
      showSlider('prev');
    };

    seeMoreButtons.forEach((button) => {
      const castedButton = button as HTMLButtonElement;
      castedButton.onclick = seeMoreButtonClickHandler;
    });

    const backClickHandler = function() {
      carousel.classList.remove('showDetail', 'next', 'prev');
      nextButton.style.pointerEvents = 'auto';
      prevButton.style.pointerEvents = 'auto';
  };
  
  if (backButton) {
    backButton.addEventListener('click', backClickHandler);
  }

  const handleSubmitClick = () => {
    handleSubmit();
  };

  const checkoutButton = document.querySelector('.checkout button:last-child');
    if (checkoutButton) {
      checkoutButton.addEventListener('click', handleSubmitClick);
    }

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        showSlider('next');
      } else if (e.key === 'ArrowLeft') {
        showSlider('prev');
      }
    };
  
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };

  }, []);


  return (
    <>
      <Head>
        <title>Next.js + TypeScript</title>
        <meta name="description" content="Next.js + TypeScript" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles/style.css"></link>
      </Head>

  <header>
    <div className="logo">Hoodie</div>
    <nav>
      <a href="">Home</a>
      <a href="">Cart</a>
    </nav>
  </header>
  <div className="carousel">
    <div className="list">
      <div className="item">
        <img alt="best_hoodie" src="/image/img1.png" />
        <div className="introduce">
          <div className="title">DESIGN SLIDER</div>
          <div className="topic">Hoodie</div>
          <div className="des">
            {/* 20 lorem */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            laborum cumque dignissimos quidem atque et eligendi aperiam
            voluptates beatae maxime.
          </div>
          <button className="seeMore">SEE MORE ↗</button>
        </div>
        <div className="detail">
          <div className="title">Awsome </div>
          <div className="des">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
            reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti
            impedit illo, accusantium in eaque nam quia adipisci aut distinctio
            porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus
            architecto dolores modi ducimus facilis quas voluptatibus! Tempora
            ratione accusantium magnam nulla tenetur autem beatae.
          </div>
          <div className="checkout">
            <button>ADD TO CART</button>
            <button onClick={handleSubmit}>CHECKOUT</button>
          </div>
        </div>
      </div>
      <div className="item">
        <img alt="best_hoodie" src="/image/img2.png" />
        <div className="introduce">
          <div className="title">DESIGN SLIDER</div>
          <div className="topic">Aerphone</div>
          <div className="des">
            {/* 20 lorem */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            laborum cumque dignissimos quidem atque et eligendi aperiam
            voluptates beatae maxime.
          </div>
          <button className="seeMore">SEE MORE ↗</button>
        </div>
        <div className="detail">
          <div className="title">Awsome </div>
          <div className="des">
            {/* lorem 50 */}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
            reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti
            impedit illo, accusantium in eaque nam quia adipisci aut distinctio
            porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus
            architecto dolores modi ducimus facilis quas voluptatibus! Tempora
            ratione accusantium magnam nulla tenetur autem beatae.
          </div>
          <div className="checkout">
            <button>ADD TO CART</button>
            <button onClick={handleSubmit}>CHECKOUT</button>
          </div>
        </div>
      </div>
      <div className="item">
        <img alt="best_hoodie" src="/image/img3.png" />
        <div className="introduce">
          <div className="title">DESIGN SLIDER</div>
          <div className="topic">Aerphone</div>
          <div className="des">
            {/* 20 lorem */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            laborum cumque dignissimos quidem atque et eligendi aperiam
            voluptates beatae maxime.
          </div>
          <button className="seeMore">SEE MORE ↗</button>
        </div>
        <div className="detail">
          <div className="title">Awsome </div>
          <div className="des">
            {/* lorem 50 */}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
            reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti
            impedit illo, accusantium in eaque nam quia adipisci aut distinctio
            porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus
            architecto dolores modi ducimus facilis quas voluptatibus! Tempora
            ratione accusantium magnam nulla tenetur autem beatae.
          </div>
          <div className="checkout">
            <button>ADD TO CART</button>
            <button onClick={handleSubmit}>CHECKOUT</button>
          </div>
        </div>
      </div>
      <div className="item">
        <img alt="best_hoodie" src="/image/img4.png" />
        <div className="introduce">
          <div className="title">DESIGN SLIDER</div>
          <div className="topic">Aerphone</div>
          <div className="des">
            {/* 20 lorem */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            laborum cumque dignissimos quidem atque et eligendi aperiam
            voluptates beatae maxime.
          </div>
          <button className="seeMore">SEE MORE ↗</button>
        </div>
        <div className="detail">
          <div className="title">Awsome </div>
          <div className="des">
            {/* lorem 50 */}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
            reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti
            impedit illo, accusantium in eaque nam quia adipisci aut distinctio
            porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus
            architecto dolores modi ducimus facilis quas voluptatibus! Tempora
            ratione accusantium magnam nulla tenetur autem beatae.
          </div>
          <div className="checkout">
            <button>ADD TO CART</button>
            <button onClick={handleSubmit}>CHECKOUT</button>
          </div>
        </div>
      </div>
      <div className="item">
        <img alt="best_hoodie" src="/image/img5.png" />
        <div className="introduce">
          <div className="title">DESIGN SLIDER</div>
          <div className="topic">Aerphone</div>
          <div className="des">
            {/* 20 lorem */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            laborum cumque dignissimos quidem atque et eligendi aperiam
            voluptates beatae maxime.
          </div>
          <button className="seeMore">SEE MORE ↗</button>
        </div>
        <div className="detail">
          <div className="title">Awsome </div>
          <div className="des">
            {/* lorem 50 */}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
            reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti
            impedit illo, accusantium in eaque nam quia adipisci aut distinctio
            porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus
            architecto dolores modi ducimus facilis quas voluptatibus! Tempora
            ratione accusantium magnam nulla tenetur autem beatae.
          </div>
          <div className="checkout">
            <button>ADD TO CART</button>
            <button onClick={handleSubmit}>CHECKOUT</button>
          </div>
        </div>
      </div>
      <div className="item">
        <img alt="best_hoodie" src="/image/img6.png" />
        <div className="introduce">
          <div className="title">DESIGN SLIDER</div>
          <div className="topic">Aerphone</div>
          <div className="des">
            {/* 20 lorem */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            laborum cumque dignissimos quidem atque et eligendi aperiam
            voluptates beatae maxime.
          </div>
          <button className="seeMore">SEE MORE ↗</button>
        </div>
        <div className="detail">
          <div className="title">Awsome </div>
          <div className="des">
            {/* lorem 50 */}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
            reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti
            impedit illo, accusantium in eaque nam quia adipisci aut distinctio
            porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus
            architecto dolores modi ducimus facilis quas voluptatibus! Tempora
            ratione accusantium magnam nulla tenetur autem beatae.
          </div>
          <div className="checkout">
            <button>ADD TO CART</button>
            <button onClick={handleSubmit}>CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
    <div className="arrows">
    <button id="prev" >&lt;</button>
    <button id="next" >&gt;</button>
    <button id="back" >See All ↗</button>
    </div>
  </div>
    </>
  )
}
