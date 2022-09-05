import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import {FcRating} from 'react-icons/fc'

const ProductCard = ({product}) => {

  return (
        <div key={product.name} className="group relative">
            <NavLink to={`products/${product._id}`}>
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                        <Link to={`/products/${product.href}`}>
                            <img
                            src={product.images[0].src}
                            alt={product.images[0].alt}
                            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                            />
                        </Link>
                    </div>
                    <div className="mt-4 flex justify-between">
                        <div>
                            <h3 className="font-bold text-gray-700">
                                <span aria-hidden="true" className="absolute inset-0" />
                                {product.name}
                            </h3>
                            <p className='flex'>
                                <FcRating/>
                                <FcRating/>
                                <FcRating/>
                                <FcRating/>
                                <FcRating/>
                            </p>
                        </div>
                        <p className="font-bold font-medium text-gray-900">{product.price}</p>
                    </div>
            </NavLink>
            
        </div>
  )
}

export default ProductCard