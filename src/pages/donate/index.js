import React from 'react';
import Partners from '../../components/Partners';
import { Helmet } from 'react-helmet';
import Pay from '../../components/Pay';
import Layout from '../../components/Layout';
import * as donate from './donate.module.css';

function Donate() {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>iACCESS-Donate</title>
            </Helmet>
            <header className={`pageBanner ${donate.donate}`}>
                <div className="pageBanInn">
                    <div className={`container-fluid container-fluid-sm container-fluid-md container-lg pageBanTop`}>
                        <h1>DONATE <span className="specHead">.</span></h1>
                    </div>
                </div>
            </header>
            <section className={`${donate.donateCont}`}>
                <div className={`container-fluid container-fluid-sm container-fluid-md container-lg`}>
                    <div className={`row ${donate.donateRow}`}>
                        <div className="col-12 col-sm-12 col-md-7 col-lg-8">
                            <div className={`${donate.donateInnLeft}`}>
                                <h6>HELP US HELP THEM</h6>
                                <h1>SUPPORT OUR VISION TO EMPOWER YOUTH WITH SRHR KNOWLEDGE</h1>
                                <p>Help us educate and empower the youth with SRHR knowledge with as little as sh. 100/$1 This will ensure that a youth/ adolescent has access to a support system to SRH information, and services.</p>
                                <div className={`${donate.chequeDetails}`}>
                                    <div className={`${donate.chequeInn}`}>
                                        <h6>DONATE VIA CHEQUE</h6>
                                        <p>NairoBits Trust<br /> P.O.Box 2778-00200 Nairobi</p>
                                        <p>Location: Ring Road, Kilimani<br /> Nairobi, Kenya.</p>
                                    </div>
                                    <div className={`${donate.chequeInn}`}>
                                        <h6>WRITE TO US</h6>
                                        <p>Please contact us at <a href="tel:+254 700 178 189">+254 700 178 189</a> or <a href="mailto:iacess@@nairobits.com">iacess@@nairobits.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`col-12 col-sm-12 col-md-5 col-lg-4 ${donate.payWidgetContOut}`}>
                            <div className={` ${donate.payWidgetCont}`}>
                                <Pay />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Partners />
        </Layout>
    )
}

export default Donate;