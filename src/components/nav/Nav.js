import React, { useState } from 'react';
import './nav.css';


import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'

const Nav = () => {
    const [activeNav , setActiveNav] = useState('#')
    return (
        <ul id='nav-list'>
            <li  className={activeNav === '#' ? 'active' : ''} onClick={() => setActiveNav('#')}><AiOutlineHome /></li>
            <li  className={activeNav === '#about' ? 'active' : ''} onClick={() => setActiveNav('#about')}><AiOutlineUser /></li>
            <li  className={activeNav === '#experience' ? 'active' : ''} onClick={() => setActiveNav('#experience')}><BiBook /></li>
            <li  className={activeNav === '#services' ? 'active' : ''} onClick={() => setActiveNav('#services')}><RiServiceLine /></li>
            <li  className={activeNav === '#contact' ? 'active' : ''} onClick={() => setActiveNav('#contact')}><BiMessageSquareDetail /></li>
        </ul>
    );
};

export default Nav;