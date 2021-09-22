import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

function Layout({ children }) {
    return (
        <>
            <Header />
            <main id="primary">
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout;
