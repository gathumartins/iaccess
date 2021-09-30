import React from 'react';
import Partners from '../../components/Partners';
import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout';
import './donate.css';

function Donate() {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>iACCESS-Donate</title>
            </Helmet>
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