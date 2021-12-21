import React from 'react';
import Partners from '../../components/Partners';
import Layout from '../../components/Layout';
import { Helmet } from 'react-helmet'
import * as involvedstyles from './involved.module.css';

function GetInvolved() {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>iACCESS-Get Involved</title>
            </Helmet>
            <header className={`pageBanner ${involvedstyles.involved}`}>
                <div className="pageBanInn">
                    <div className="container-fluid container-fluid-sm container-fluid-md container-lg pageBanTop">
                        <h1>GET INVOVLED <span className="specHead">!</span></h1>
                    </div>
                </div>
            </header>
            <section className={involvedstyles.involvedCont}>
                <div className="container-fluid container-lg">
                    <div className="row">
                        <div className={`col-12 ${involvedstyles.involvedTitle} mb-4`}>
                            <h3>help us help them</h3>
                            <h2>Get in touch with us today</h2>
                        </div>
                        <div className="col-sm-6 col-md-6 mb-3">
                            <div className={involvedstyles.leftInBg}>
                                <div className={`${involvedstyles.involvedInn} ${involvedstyles.involvedinnLeft}`}>
                                    <h2 className={involvedstyles.invCont}>let's partner up</h2>
                                    <h6 className={`my-4 ${involvedstyles.invCont}`}>WRITE TO US</h6>
                                    <p className={involvedstyles.invCont}>Please contact us at    <a href="tel:+254 700 178 189 ">+254 700 178 189 </a>    or   <a href="mailto:iacess@nairobits.com">iacess@nairobits.com</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 mb-3">
                            <div className={involvedstyles.rightInBg}>
                                <div className={`${involvedstyles.involvedInn} ${involvedstyles.involvedInnRight}`}>
                                    <h2 className={involvedstyles.invCont}>VOLUNTEER with us</h2>
                                    <h6 className={`my-4 ${involvedstyles.invCont}`}>WRITE TO US</h6>
                                    <p className={involvedstyles.invCont}>Please contact us at    <a href="tel:+254 700 178 189 ">+254 700 178 189 </a>    or   <a href="mailto:iacess@nairobits.com">iacess@nairobits.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Partners />
        </Layout>
    )
}

export default GetInvolved;
