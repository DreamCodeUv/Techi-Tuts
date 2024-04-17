import React, { useState } from 'react'
import '../css/Nav.css'
import tt from '../assets/logo/tt.jpeg'
import { NavLink } from 'react-router-dom';
import { AiFillYoutube } from 'react-icons/ai';




const Navigation = () => {
    const [sid, setSid] = useState(false);
    function Shclk() {
        setSid(!sid);
    }
    return (
        <>
            <header>
                <nav>
                    <div className="top-nav">
                        <div className="left">
                            <div className="logo-container">
                                <img src={tt} alt="Techi Tuts Website Logo" className="logo-im" />
                                <span className="web-name">Techi Tuts</span>
                            </div>
                        </div>
                        <div className="mid ul">
                            <ul className="nav-ul">
                            <NavLink to="/cources" ><li className="nav-li-ham">Cources</li></NavLink>
                            <NavLink to="/contact"><li className="nav-li-ham">Contact</li></NavLink>
                            </ul>
                        </div>
                        <div className="right">
                        <NavLink to="/cources" ><li className="nav-li-ham"><AiFillYoutube size={30} /></li></NavLink>

                            <div className="hamburger" onClick={() => Shclk()}>
                                <span className="ham" id={sid ? "up-b" : "noclk"}></span>
                                <span className="ham" id={sid ? "hide" : ""}></span>
                                <span className="ham" id={sid ? "bt-b" : "noclk"}></span>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-nav">
                        <div className="home">
                            <NavLink className='home' to={'/'}>Home</NavLink>  </div>
                    </div>
                </nav>
                <div className="menu-ham" id={sid ? "show" : "hide"}>
                    <div className="list-nav">
                        <ul className="nav-ul-ham">
                            <NavLink to="/cources" ><li className="nav-li-ham">Cources</li></NavLink>
                            <NavLink to="/contact"><li className="nav-li-ham">Contact</li></NavLink>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navigation