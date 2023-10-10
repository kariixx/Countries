import React, { useEffect, useState } from 'react'
import './Header.css'
import logoHeader from '../../assets/logo-3268177_640.webp'
import { LINKS } from './constants'


export default function Header() {

    const [toggle, setToggle] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const handleToggle = () => {
        if(windowWidth <= 992) {
            setToggle(!toggle)
        }
    }

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    
    return (
        <>
            <div className={`backdrop ${toggle ? 'show' : ''}`} onClick={handleToggle}></div>
            
            <header>
                <div className="container">
                    <nav className='navigation'>
                        <div className="logo">
                            <a href="#main">
                                <img className='logotip' src={logoHeader} alt="" />
                            </a>
                        </div>

                        <ul className={`menu ${toggle ? 'show-menu' : ''}`}>
                            {LINKS.map((linkObj, index) => (
                                <li onClick={handleToggle} key={index}>
                                    <a className='menu__a' href={linkObj.link}>{linkObj.value}</a>
                                </li>
                            ))}
                        </ul>

                        <div onClick={handleToggle} className={`mobile-btn ${toggle ? 'show-mobile-btn' : ''}`}>
                            <span></span>
                        </div>

                    </nav>
                </div>
            </header>
            
        </>
    )
}
