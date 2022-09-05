import React from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { PhoneIcon, HomeIcon, InformationCircleIcon } from '@heroicons/react/outline';
import {BsFacebook,BsInstagram,BsTwitter} from 'react-icons/bs';


const TopBar = () => {
  return (
    <div className="relative">
    <nav className="bg-black px-4 sm:px-6 lg:px-8 relative flex items-center justify-between sm:h-10 lg:justify-between" aria-label="Global">
      <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
        <div className="flex items-center justify-between w-full md:w-auto">
          <p className='text-white pr-5 flex'><PhoneIcon className="h-6 w-6" aria-hidden="true" /> 01995595975</p>
          <p className='text-white pr-5 flex'><HomeIcon className="h-6 w-6" aria-hidden="true" /> Fatulla,Narayanganj</p>
          <p className='text-white pr-5 flex'><InformationCircleIcon className="h-6 w-6" aria-hidden="true" /> All Week</p>
          <div className="-mr-2 flex items-center md:hidden">
            {/* <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open main menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button> */}
          </div>
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

export default TopBar