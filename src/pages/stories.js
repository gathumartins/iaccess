import React from 'react';
import Layout from '../components/Layout';
import './stories.css';

function Stories() {
    return (
        <Layout>
            <header className="pageBanner stories">
                <div className="pageBanInn">
                    <div className="container-fluid container-fluid-sm container-fluid-md container-lg pageBanTop">
                        <h1>STORIES <span className="specHead">.</span></h1>
                    </div>
                </div>
            </header>
        </Layout>
    )
}

export default Stories;
