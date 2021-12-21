import React from 'react';
import Layout from '../../components/Layout';
import { Helmet } from 'react-helmet';
import { FaSearch } from 'react-icons/fa';
import * as resstyles from './resources.module.css';
import SingleResource from '../../components/SingleResource';

function Resources() {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>iACCESS-Our Resources</title>
            </Helmet>
            <header className={`pageBanner ${resstyles.resources}`}>
                <div className="pageBanInn">
                    <div className="container-fluid container-fluid-sm container-fluid-md container-lg pageBanTop">
                        <h1>RESOURCES <span className="specHead">.</span></h1>
                        <div className="row mt-3">
                            <div className={`col-12 col-sm-12 col-md-12 col-lg-6 ${resstyles.resourcesFilter}`}>
                                <label className={`btn ${resstyles.filCont}`}>
                                    <span className={`${resstyles.filterRLabel}`}>Policies</span>
                                    <input type="radio" name="radio" />
                                    <span className={`${resstyles.resRFilter}`}></span>
                                </label>
                                <label className={`btn ${resstyles.filCont}`}>
                                    <span className={`${resstyles.filterRLabel}`}>Data</span>
                                    <input type="radio" name="radio" />
                                    <span className={`${resstyles.resRFilter}`}></span>
                                </label>
                                <label className={`btn ${resstyles.filCont}`}>
                                    <span className={`${resstyles.filterRLabel}`}>SRHR info</span>
                                    <input type="radio" name="radio" />
                                    <span className={`${resstyles.resRFilter}`}></span>
                                </label>
                                <label className={`btn ${resstyles.filCont}`}>
                                    <span className={`${resstyles.filterRLabel}`}>All of them</span>
                                    <input type="radio" name="radio" />
                                    <span className={`${resstyles.resRFilter}`}></span>
                                </label>
                            </div>
                            <div className={`col-12 col-sm-12 col-md-12 col-lg-6`}>
                                <div className={`${resstyles.searchField}`}>
                                    <input type="text" name="resourceSearch" id="" className="form-control" placeholder="Search for resources by title or category..." />
                                    <div className={`${resstyles.searchIcon}`}><FaSearch /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className={`${resstyles.resourcesCont}`}>
                <div className={`container-fluid container-fluid-sm container-fluid-md container-lg ${resstyles.resourcesContIn}`}>
                    <article className={`${resstyles.resourceBlocks}`}>
                        <header className={`${resstyles.resTopHead}`}>
                            <h1>RECENT</h1>
                            <a href="/">VIEW MORE INFOGRAPHICS</a>
                        </header>
                        <div className={`${resstyles.resourcesBlockIn}`}>
                            <SingleResource />
                            <SingleResource />
                            <SingleResource />
                            <SingleResource />
                        </div>
                    </article>
                    <article className={`${resstyles.resourceBlocks}`} id="infographics">
                        <header className={`${resstyles.resTopHead}`}>
                            <h1>DATA</h1>
                            <a href="/">VIEW MORE INFOGRAPHICS</a>
                        </header>
                        <div className={`${resstyles.resourcesBlockIn}`}>
                            <SingleResource />
                            <SingleResource />
                            <SingleResource />
                            <SingleResource />
                        </div>
                    </article>
                    <article className={`${resstyles.resourceBlocks}`} id="resourceslearning">
                        <header className={`${resstyles.resTopHead}`}>
                            <h1>LEARNING MATERIALS</h1>
                            <a href="/">VIEW MORE INFOGRAPHICS</a>
                        </header>
                        <div className={`${resstyles.resourcesBlockIn}`}>
                            <SingleResource />
                            <SingleResource />
                            <SingleResource />
                            <SingleResource />
                        </div>
                    </article>
                    <article className={`${resstyles.resourceBlocks}`} id="policies">
                        <header className={`${resstyles.resTopHead}`}>
                            <h1>POLICIES</h1>
                            <a href="/">VIEW MORE INFOGRAPHICS</a>
                        </header>
                        <div className={`${resstyles.resourcesBlockIn}`}>
                            <SingleResource />
                            <SingleResource />
                            <SingleResource />
                            <SingleResource />
                        </div>
                    </article>
                </div>
            </div>
        </Layout>
    )
}

export default Resources;
