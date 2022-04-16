import React, {useState} from 'react'
import './NavbarStyle.css'
import {SiPaloaltosoftware} from 'react-icons/si'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)


    return (
        <div className='navbar'>
            <div className="container">
                <div className="logo">
                    <SiPaloaltosoftware className='icon'/>
                    <h1>Protected</h1>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Recovery</a></li>
                    <li><a href='#'>Cloud</a></li>
                    <li><a href='#'>Contact</a></li>
                    <button>Sign In</button>
                </ul>

                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar