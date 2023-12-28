import React from 'react';
import Link from 'next/link';
import FillBtn from './FillBtn';

const Hero = () => {
  return (
    <div className='flex min-h-screen w-full md:flex-row flex-col'>
      <div
        className='x-spacing w-full my-auto flex flex-col md:basis-1/3 min-h-screen justify-center'
        id='hero-left'
      >
        <div>
          <h1 className='hero-title hero-title-font'><br></br>
          Creative <span className='blue-config uppercase'>fashion</span>
          </h1>
          <h1 className='hero-title hero-title-font'>
          To your high{' '}
            <span className='blue-config uppercase'>fashion style</span>
          </h1>
        </div>
        <div>
          <p className='py-6 hero-subtitle'>
          Discover the latest collection of our creative products
          </p>
        </div>
        <FillBtn text='Shop now' url='/shop/all' />
      </div>
      <div className='w-full md:basis-2/3 h-screen'>
        <div className='h-full'>
          <img className='h-full object-cover w-full'
            src='https://images.pexels.com/photos/3480353/pexels-photo-3480353.jpeg?auto=compress&cs=tinysrgb&w=600'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
