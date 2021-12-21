import React from 'react';
import { Helmet } from 'react-helmet';
import Social from './Social';
import FooterNav from './FooterNav';
import './Footer.css';
function Footer() {
    return (
        <footer className="myFooter">
            <Helmet>
                <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
            </Helmet>
            <article className="myFooterIn">
                <Social />
                <FooterNav />
            </article>
            <df-messenger
                intent="WELCOME"
                chat-title="iBOT"
                agent-id="895823ad-0756-4491-bbef-b57c224ff8f4"
                language-code="en"
                chat-icon="https://i-access.vercel.app/imgs/ibot.png"
            ></df-messenger>
        </footer>
    )
}

export default Footer;
