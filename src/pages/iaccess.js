import React from 'react';
import Partners from '../components/Partners';
import Layout from '../components/Layout';
import './iaccess.css';

function Iaccess() {
    return (
        <Layout>
            <header className="pageBanner iaccess">
                <div className="pageBanInn">
                    <div className="container-fluid container-fluid-sm container-fluid-md container-lg pageBanTop">
                        <h1>WHAT IS IACCESS <span className="specHead">?</span></h1>
                    </div>
                </div>
            </header>
            <Partners />
        </Layout>
    )
}

export default Iaccess;