import React from 'react';
import {NavLink} from 'react-router-dom';
const MultiCollBtn = (  props) => {
   console.log(props.path)
  return (
    <NavLink to={props.path}>
      <div className='bg-slate-100 mt-5 py-3'>
            <p className='font-bold'>See All</p>
      </div>
    </NavLink>
  )
}

export default MultiCollBtn