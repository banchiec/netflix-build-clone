import React, { useState, useEffect } from 'react'
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false)
    
    const transitionNavbar = ()=> {
        if(window.scrollY > 100)
            handleShow(true)
        else
            handleShow(false)
    }
    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar )
        return ()=> window.removeEventListener("scroll", transitionNavbar)
    }, [])
    return (
        <div className= {`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
                <img
                src="https://logos-marcas.com/wp-content/uploads/2020/04/Netflix-Logo.png"
                alt="logo"
                className="nav__logo"></img> 
                <ul>
                    <li> Inicio</li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <img src="https://w7.pngwing.com/pngs/971/128/png-transparent-finder-os-x-yosemite-computer-icons-macos-folder-smiley-window-emoticon.png"
                alt=""
                className="nav__avatar"/>
            </div>
        </div>
    )
}

export default Nav
