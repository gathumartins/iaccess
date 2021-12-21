import React from 'react';
import Layout from '../../components/Layout';
import { ImArrowRight } from 'react-icons/im';
import { IoMdHelpBuoy } from "react-icons/io";
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import * as helpstyle from './help.module.css';

function Help() {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>iACCESS-Help</title>
            </Helmet>
            <header className={`pageBanner ${helpstyle.help}`}>
                <div className="pageBanInn">
                    <div className="container-fluid container-fluid-sm container-fluid-md container-lg pageBanTop">
                        <h1>in an emergency <span className="specHead">?</span></h1>
                    </div>
                </div>
            </header>
            <section className={helpstyle.helpcont}>
                <div className="container-fluid container-fluid-sm container-fluid-md container-lg">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 mb-5">
                            <div className={`${helpstyle.helpInTopL} mb-3`}>
                                <IoMdHelpBuoy className={helpstyle.support} />
                                <h2>If you or a friend
                                    need urgent
                                    assistance. </h2>
                            </div>
                            <div className="d-grid">
                                <a href="tel:2556365"><div className={`${helpstyle.callBtn}`}>call:  2556365</div></a>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 mb-5">
                            <div className={`${helpstyle.helpInTopR} mb-5 sm-mx-auto`}>
                                <h2>want someone to
                                    call you for
                                    help</h2>
                            </div>
                            <form className={`${helpstyle.phoneForm} sm-mx-auto`}>
                                <input className={`form-control ${helpstyle.myInput}`} type="tel" name="mobileno" id="mobileno" placeholder="Enter your pnone number" />
                                <button className={`btn ${helpstyle.btnSubmit}`} type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className={helpstyle.helpBtm}>
                <div className="container-fluid container-fluid-sm container-fluid-md container-lg">
                    <Link to="/health" className={helpstyle.healthLink}>OR FIND A HEALTH RESEOURCE NEAR YOU<span className={`ml-3 ${helpstyle.speHead}`}>!</span> <span className={`arrowmargin ${helpstyle.myArr}`}><ImArrowRight /></span></Link>
                </div>
            </section>
        </Layout>
    )
}

export default Help;