import React, { useState } from 'react';
import {GoSettings} from 'react-icons/go';
import { AiOutlineClose } from 'react-icons/ai'
import { RadioGroup } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const colors = [
  { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
  { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
  { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  { name: 'Red', class: 'bg-red-500', selectedClass: 'ring-red-500' },
]

const SearchFilter = () => {
  const [filterOn,setFilterOn] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors[0])
  return (
    <div className=''>
        <div className='flex items-center text-left'>
          <button onClick={() => setFilterOn((prev) => !prev)}>
              {
                filterOn ? 
                <AiOutlineClose/>
                :
                <GoSettings/>
              }
          </button>
          <p className='ml-5'>Filter</p>
        </div>
        {
          filterOn ? (
            <div className='flex justify-between'>
                <div>
                  <h3 className="text-sm text-gray-900 font-medium">Color</h3>

                  <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                    <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                    <div className="">
                      {colors.map((color) => (
                        <RadioGroup.Option
                          key={color.name}
                          value={color}
                          className={({ active, checked }) =>
                            classNames(
                              color.selectedClass,
                              active && checked ? 'ring ring-offset-1' : '',
                              !active && checked ? 'ring-2' : '',
                              '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                            )
                          }
                        >
                          <RadioGroup.Label as="span" className="sr-only">
                            {color.name}
                          </RadioGroup.Label>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              color.class,
                              'h-8 w-8 border border-black border-opacity-10 rounded-full'
                            )}
                          />
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              <div>
                <h3 className="text-sm text-gray-900 font-medium">Size</h3>
                <p className='border-2 p-2 font-bold'>xl</p>
                <p className='border-2 p-2 font-bold '>xxl</p>
                <p className='border-2 p-2 font-bold '>xxxl</p>
                <p className='border-2 p-2 font-bold '>sm</p>
                <p className='border-2 p-2 font-bold '>xs</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-900 font-medium">Price</h3>
                <p className='border-2 p-2 font-bold'>500</p>
                <p className='border-2 p-2 font-bold '>1000</p>
                <p className='border-2 p-2 font-bold '>1200</p>
                <p className='border-2 p-2 font-bold '>1400</p>
                <p className='border-2 p-2 font-bold '>1500</p>
              </div>
            </div> 
          )
          : 
          ''
        }
    </div>
  )
}

export default SearchFilter