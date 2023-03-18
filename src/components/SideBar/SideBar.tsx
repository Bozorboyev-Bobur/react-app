import React from 'react'
import Search from '../Search/Search'
import './SideBar.css'

function SideBar() {
    return (
        <>
            <div className='sideBarContainer'>
                <Search />
                <div className="sideBarContent">
                </div>
            </div>
            <div className="sideBarBg"></div>
        </>
    )
}

export default SideBar