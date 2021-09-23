import React from 'react';
import Partners from '../../components/Partners';
import Layout from '../../components/Layout';
import './donate.css';

function Donate() {
    return (
        <Layout>
            <header className="pageBanner donate">
                <div className="pageBanInn">
                    <div className="container-fluid container-fluid-sm container-fluid-md container-lg pageBanTop">
                        <h1>DONATE <span className="specHead">.</span></h1>
                    </div>
                </div>
            </header>
            <Partners />
        </Layout>
    )
}

export default Donate;