import React from 'react';
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const Footer = () => {
    return (
        <div>
            <footer>
                <a href="#" className='footer__logo'>Portfolio</a>

                <ul className="permalinks">
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <div className="footer__socials">
                <a href='https://linkedin.com' target='_blank' rel="noopener noreferrer"><BsLinkedin /></a>
            <a href='https://github.com' target='_blank' rel="noopener noreferrer"><FaGithub /></a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;