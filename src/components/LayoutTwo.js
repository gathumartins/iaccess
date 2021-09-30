import React from 'react';
import Header from './Header';
import FooterTwo from './FooterTwo';
import './Layout.css';

function LayoutTwo({ children }) {
    return (
        <>
            <Header />
            <main id="primary">
                {children}
            </main>
            <FooterTwo />
        </>
    )
}

export default LayoutTwo;
