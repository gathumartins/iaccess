import React from 'react';
import Layout from '../../components/Layout';
import { Helmet } from 'react-helmet';
import './health.css';

function HealthFinder() {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>iACCESS-Health Finder</title>
            </Helmet>
            <header className="pageBanner">
                <div className="pageBanInn health">
                    <div className="container-fluid container-fluid-sm container-fluid-md container-lg pageBanTop">
                        <h1>FIND A HEALTH SERVICE PROVIDER <span className="specHead">.</span></h1>
                    </div>
                </div>
            </header>
        </Layout>
    )
}

export default HealthFinder;
