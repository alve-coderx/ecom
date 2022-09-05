import { NavLink } from 'react-router-dom'
import products from '../Store/mens'
import MultiCollBtn from './MultiCollBtn'
import Navbar from './Navbar'
import SearchFilter from './SearchFilter'
import ProductCard from './ProductCard'

const SecondCorner = () => {
    
    const pathArray = window.location.pathname.split('/')
    const productCondition =  products.filter((element) => element.slug == window.location.pathname.split(`/${pathArray[1]}/`).pop()) 
    
    return (
    <div>
      {window.location.pathname == '/' ? '' : window.location.pathname == '/home' ? '' : <Navbar/>}

      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
       
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
                            <NavLink to={`/${pathArray[1]}`} className="mr-2 text-sm font-medium text-gray-900">
                              {pathArray[1]}
                            </NavLink>
                           
                          </div>
                     
                    </ol>
                  </nav>
                  <h2 className="text-2xl font-bold tracking-tight uppercase text-gray-900">Men's Corner</h2>
                  <p>Share</p>
                </div>
                <SearchFilter/>
              </div>
           
          <hr/>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {productCondition && productCondition.map((product) => (
              <ProductCard product={product}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondCorner;