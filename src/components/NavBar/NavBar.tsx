import React from 'react'
import './NavBar.css'
import { Router } from 'react-router-dom'

function NavBar() {
    return (
        <>
            <div className="navBarContainer">
                <a href="/" className='navBarLogoContainer'>
                    <img src="/images/logo.svg" className='logo' alt="" />
                </a>
                <ul className="navBarList">
                    <li className="navBarItem">
                        <img src="/images/navBarIcon1.svg" alt="" />
                        <span>Блог</span>
                        <img src="/images/greenPlusIcon.svg" alt="" />
                    </li>
                    <li className="navBarItem">
                        <img src="/images/navBarIcon2.svg" alt="" />
                        <span>Обсуждения</span>
                        <img src="images/arrow.svg" alt="" />
                    </li>
                    <li className="navBarItem">
                        <img src="/images/navBarIcon3.svg" alt="" />
                        <span>Курсы</span>
                        <img src="images/arrow.svg" alt="" />
                    </li>
                </ul>
                <button className='navBarSupportBtn'>Поддержка проекта</button>
            </div>
            <div className="navBarBg">

            </div>
        </>
    )

}

export default NavBar