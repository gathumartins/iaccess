import React from 'react';
import Social from './Social';
import FooterNav from './FooterNav';
import './Footer.css';
function Footer() {
    return (
        <footer className="myFooter">
            <article className="myFooterIn">
                <Social />
                <FooterNav />
            </article>
        </footer>
    )
} 

export default Footer;
