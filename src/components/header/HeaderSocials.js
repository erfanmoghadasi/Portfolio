import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href='https://www.linkedin.com/in/erfan-moghadasi-45b0a621b' target='_blank' rel="noopener noreferrer"><BsLinkedin /></a>
            <a href='https://github.com/erfanmoghadasi' target='_blank' rel="noopener noreferrer"><FaGithub /></a>
        </div>
    );
};

export default HeaderSocials;