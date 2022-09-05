import React from 'react'
import Carousel from './Carousel'
import {FaTruckLoading} from 'react-icons/fa'
import {FiTruck} from 'react-icons/fi'
import {HiOutlineSupport} from 'react-icons/hi'

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  // More products...
]


const TopPromo = () => {
  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-2 gap-4 items-center justifyit-center'>
        <div className='lg:col-span-1 md:col-span-2 col-span-2 bg-hero-pattern p-[17rem] bg-no-repeat bg-cover bg-center'>
          <div className='bg-white  py-5'>
            <p className="text-2xl font-semibold text-gray-500">Banner</p>
            <p className="text-2xl font-bold uppercase">Your Title Text</p>
          </div>
        </div>
        <div className='lg:col-span-1 md:col-span-2 col-span-2 grid grid-cols-2 gap-5'>
          <div className='bg-hero-second bg-no-repeat bg-cover bg-center'>
            <div className='bg-white my-36'>
              <p className="text-2xl font-bold uppercase">Your Title Text</p>
            </div>
          </div>
          <div className='bg-hero-third bg-no-repeat bg-cover bg-center'>
            <div className='bg-white my-36'>
              <p className="text-2xl font-bold uppercase">Your Title Text</p>
            </div>
          </div>
          <div className='col-span-2 bg-hero-fourth bg-no-repeat bg-cover bg-center'>
            <div className='bg-white my-36'>
                <p className="text-2xl font-bold uppercase">Your Title Text</p>
              </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-3 mt-5'>
        <div className='lg:col-span-1 col-span-3 flex justify-center m-2 rounded-lg shadow-lg bg-gray-100 items-center p-5'>
          <p className='text-2xl pr-2'><FiTruck/></p>
          <p className='text-left'>
            <span className='font-bold'>Free Shipping</span><br/>
            On of the UA order or online order
          </p>
        </div>
        
        <div className='lg:col-span-1 col-span-3 flex justify-center m-2 rounded-lg shadow-lg bg-gray-100 items-center p-5'>
          <p className='text-2xl pr-2'><FaTruckLoading/></p>
          <p className='text-left'>
            <span className='font-bold'>Free Shipping</span><br/>
            On of the UA order or online order
          </p>
        </div>
        
        <div className='lg:col-span-1 col-span-3 flex justify-center m-2 rounded-lg shadow-lg bg-gray-100 items-center p-5'>
          <p className='text-2xl pr-2'><HiOutlineSupport/></p>
          <p className='text-left'>
            <span className='font-bold'>Free Shipping</span><br/>
            On of the UA order or online order
          </p>
        </div>
        
        
      </div>
    </div>

  )
}

export default TopPromo