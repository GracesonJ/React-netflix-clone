import React, { useEffect, useState } from 'react'
import './Nav.css';

function Nav() {
    const [show,setShow]= useState(false)
    useEffect(()=>{
        window.addEventListener('scroll', () => {
            if (window.scrollY> 500 ) {
                setShow(true)
            }else{
                setShow(false)
            }
        })
    })
  return (
    <div className={`nav ${show&& 'nav-black'}`}>
        <img width={'120px'} src="https://pngimg.com/uploads/netflix/small/netflix_PNG32.png" alt="logo" />
    </div>
  )
}

export default Nav