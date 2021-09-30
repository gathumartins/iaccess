import React from 'react';
import Layout from '../../components/Layout';
import { ImArrowRight } from 'react-icons/im';
import { IoMdHelpBuoy } from "react-icons/io";
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import './help.css';

function Help() {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>iACCESS-Help</title>
            </Helmet>
            <header className="pageBanner help">
                <div className="pageBanInn">
                    <div className="container-fluid container-fluid-sm container-fluid-md container-lg pageBanTop">
                        <h1>in an emergency <span className="specHead">?</span></h1>
                    </div>
                </div>
            </header>
            <section className="helpcont">
                <div className="container-fluid container-fluid-sm container-fluid-md container-lg">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 mb-5">
                            <div className="helpInTopL mb-3">
                                <IoMdHelpBuoy className="support" />
                                <h2>If you or a friend
                                    need urgent
                                    assistance. </h2>
                            </div>
                            <a href="tel:2556365"><div className="callBtn">call:  2556365</div></a>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 mb-5">
                            <div className="helpInTopR mb-5 sm-mx-auto">
                                <h2>want someone to
                                    call you for
                                    help</h2>
                            </div>
                            <form className="phoneForm sm-mx-auto">
                                <input className="form-control myInput" type="tel" name="mobileno" id="mobileno" placeholder="Enter your pnone number" />
                                <button className="btn btn-submit" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className="helpBtm">
                <div className="container-fluid container-fluid-sm container-fluid-md container-lg">
                    <Link to="/health" className="healthLink">OR FIND A HEALTH RESEOURCE NEAR YOU<span className="ml-3 speHead">!</span> <span className="arrowmargin myArr"><ImArrowRight /></span></Link>
                </div>
            </section>
        </Layout>
    )
}

export default Help;