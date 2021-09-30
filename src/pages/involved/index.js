import React from 'react';
import Partners from '../../components/Partners';
import Layout from '../../components/Layout';
import { Helmet } from 'react-helmet'
import './involved.css';

function GetInvolved() {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>iACCESS-Get Involved</title>
            </Helmet>
            <header className="pageBanner involved">
                <div className="pageBanInn">
                    <div className="container-fluid container-fluid-sm container-fluid-md container-lg pageBanTop">
                        <h1>GET INVOVLED <span className="specHead">!</span></h1>
                    </div>
                </div>
            </header>
            <section className="involvedCont">
                <div className="container-fluid container-lg">
                    <div className="row">
                        <div className="col-12 involvedTitle mb-4">
                            <h3>help us help them</h3>
                            <h2>Get in touch with us today</h2>
                        </div>
                        <div className="col-sm-6 col-md-6 mb-3">
                            <div className="leftInBg">
                                <div className="involvedInn involvedinnLeft">
                                    <h2 className="invCont">let's partner up</h2>
                                    <h6 className="my-4 invCont">WRITE TO US</h6>
                                    <p className="invCont">Please contact us at    <a href="tel:+254 700 178 189 ">+254 700 178 189 </a>    or   <a href="mailto:iacess@nairobits.com">iacess@nairobits.com</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 mb-3">
                            <div className="rightInBg">
                                <div className="involvedInn involvedInnRight">
                                    <h2 className="invCont">VOLUNTEER with us</h2>
                                    <h6 className="my-4 invCont">WRITE TO US</h6>
                                    <p className="invCont">Please contact us at    <a href="tel:+254 700 178 189 ">+254 700 178 189 </a>    or   <a href="mailto:iacess@nairobits.com">iacess@nairobits.com</a></p>
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
