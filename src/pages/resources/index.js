import React from 'react';
import Layout from '../../components/Layout';
import { Helmet } from 'react-helmet';
import './resources.css';

function Resources() {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>iACCESS-Our Resources</title>
            </Helmet>
            <header className="pageBanner resources">
                <div className="pageBanInn">
                    <div className="container-fluid container-fluid-sm container-fluid-md container-lg pageBanTop">
                        <h1>RESOURCES <span className="specHead">.</span></h1>
                    </div>
                </div>
            </header>
        </Layout>
    )
}

export default Resources;
