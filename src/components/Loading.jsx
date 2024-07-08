import React from 'react'
import './Com.css';
import { useNavigate } from 'react-router-dom';
const Loading = () => {
  const navigate=useNavigate();
  return (
   
    <div className='enterbtn'>
    <span class="hover-underline-animation" onClick={()=>navigate('/home')}> Shop now </span>
    </div>
  )
}

export default Loading;