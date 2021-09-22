import React from 'react';
import Partners from '../components/Partners';
import Layout from '../components/Layout';
import './involved.css';

function GetInvolved() {
    return (
        <Layout>
            <header className="pageBanner involved">
                <div className="pageBanInn">
                    <div className="container-fluid container-fluid-sm container-fluid-md container-lg pageBanTop">
                        <h1>GET INVOVLED <span className="specHead">!</span></h1>
                    </div>
                </div>
            </header>
            <Partners />
        </Layout>
    )
}

export default GetInvolved;
