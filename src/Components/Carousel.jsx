import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
                    <img className='w-full h-[40rem]' src='https://images.unsplash.com/photo-1572708609022-9689cecb4218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' />

          </div>
          <div>
                    <img className='w-full h-[40rem]' src='https://images.unsplash.com/photo-1572708609022-9689cecb4218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' />

          </div>
          <div>
                    <img className='w-full h-[40rem]' src='https://images.unsplash.com/photo-1572708609022-9689cecb4218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' />

          </div>
          <div>
                    <img className='w-full h-[40rem]' src='https://images.unsplash.com/photo-1572708609022-9689cecb4218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' />

          </div>
          <div>
                    <img className='w-full h-[40rem]' src='https://images.unsplash.com/photo-1572708609022-9689cecb4218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' />

          </div>
        </Slider>
      </div>
    );
  }
}