import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MultiCollBtn from './MultiCollBtn'
import Navbar from './Navbar'
import ProductCard from './ProductCard'
import SearchFilter from './SearchFilter'
import { useSelector } from 'react-redux'


const menuItems = [
  {
    id : 1,
    slug : 'mens-pants',
    name   : 'New Pants'
  },
  {
    id : 2,
    slug : 'mens-shirts',
    name   : 'Shirts'
  },
  {
    id : 3,
    slug : 'mens-shoes',
    name   : 'Shoes'
  },
  {
    id : 4,
    slug : 'mens-begs',
    name   : 'Beg'
  },
  {
    id : 5,
    slug : 'mens-hoddies',
    name   : 'Hoddie'
  },

]
  

const SecondCorner = () => {
    const products = useSelector((state)=> state.allProducts.products);
    const menscorner = products.filter((element)=> element.cetagory == "mens");

    return (
    <div>
      {window.location.pathname == '/' ? '' : window.location.pathname == '/home' ? '' : <Navbar/>}

      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        { 
            window.location.pathname === '/mens' ? 
            (
              <div>
                <div className='flex justify-around h-32 items-center bg-slate-100	'>
                <nav aria-label="Breadcrumb">
                <ol role="list" className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
                          <div className="flex items-center">
                            <NavLink to='/' className="mr-2 text-sm font-medium text-gray-900">
                              Home
                            </NavLink>
                            <svg
                              width={16}
                              height={20}
                              viewBox="0 0 16 20"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                              className="w-4 h-5 text-gray-300"
                            >
                              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                            </svg>
                          </div>
                      <li className="text-sm">
                        <NavLink to={window.location.pathname} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                          {window.location.pathname.slice(1)}
                        </NavLink>
                      </li>
                    </ol>
                  </nav>
                  <h2 className="text-2xl font-bold tracking-tight uppercase text-gray-900">Men's Corner</h2>
                  <p>Share</p>
                </div>
                <SearchFilter/>
              </div>
            )
            : 
            (<div className="flex justify-between">
              <h2 className="text-2xl font-bold tracking-tight uppercase text-gray-900">Men's Corner</h2>
              <div className="flex">
                {
                  menuItems.map((item) => (
                    <p key={item.slug} className="uppercase font-bold mr-3">{item.name}</p>
                  ))
                }
              </div>
            </div>)
          }
          <hr/>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {menscorner.map((product) => (
              <ProductCard key={product.href} product={product}/>
            ))}
          </div>
              
        </div>
      </div>
    </div>
  )
}

export default SecondCorner;