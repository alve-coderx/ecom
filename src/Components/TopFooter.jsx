import React from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { PhoneIcon, HomeIcon, InformationCircleIcon } from '@heroicons/react/outline';
import {BsFacebook,BsInstagram,BsTwitter} from 'react-icons/bs';


const TopFooter = () => {
  return (
    <div className="relative">
    <nav className="bg-black px-4 sm:px-6 lg:px-8 relative flex items-center justify-between sm:h-10 lg:justify-between" aria-label="Global">
      <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
        <div className="flex items-center justify-center w-full md:w-auto">
          <p className='text-white pr-5 flex uppercase'> Be in touch with us</p>
            <div className='bg-white pr-10 pl-3'>Enter your email</div>
        </div>
      </div>
      <div className="flex">
          <a href='#' className="font-medium text-white ml-5 hover:text-gray-900">
            <BsFacebook/>
          </a>
          <a href='#' className="font-medium text-white ml-5 hover:text-gray-900">
            <BsInstagram/>
          </a>
          <a href='#' className="font-medium text-white ml-5 hover:text-gray-900">
            <BsTwitter/>
          </a>
        
      </div>
    </nav>
  </div>
  )
}

export default TopFooter