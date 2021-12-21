import React from 'react';
import Layout from '../../components/Layout';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import * as health from './health.module.css';

function HealthFinder({ data }) {
    const page = data.wpPage;
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>iACCESS-Health Finder</title>
            </Helmet>
            <header className="pageBanner">
                <div className={`pageBanInn ${health.health}`}>
                    <div className="container-fluid container-fluid-sm container-fluid-md container-lg pageBanTop">
                        <h1>FIND A HEALTH SERVICE PROVIDER <span className="specHead">.</span></h1>
                        <div className="row mt-3">
                            <div className={`col-12 col-sm-12 col-md-12 col-lg-7 ${health.resourcesFilter}`}>
                                <label className={`${health.filCont}`}>
                                    <span className={`${health.filterLabel}`}>Counselling</span>
                                    <input type="radio" name="radio" />
                                    <span className={`${health.resFilter}`}></span>
                                </label>
                                <label className={`${health.filCont}`}>
                                    <span className={`${health.filterLabel}`}>Testing</span>
                                    <input type="radio" name="radio" />
                                    <span className={`${health.resFilter}`}></span>
                                </label>
                                <label className={`${health.filCont}`}>
                                    <span className={`${health.filterLabel}`}>Emergency center</span>
                                    <input type="radio" name="radio" />
                                    <span className={`${health.resFilter}`}></span>
                                </label>
                                <label className={`${health.filCont}`}>
                                    <span className={`${health.filterLabel}`}>Police Post</span>
                                    <input type="radio" name="radio" />
                                    <span className={`${health.resFilter}`}></span>
                                </label>
                            </div>
                            <div className={`col-12 col-sm-12 col-md-12 col-lg-2`}>
                                <div className="dropdown d-grid">
                                    <button className={`btn dropdown-toggle ${health.selectBtn}`} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown button
                                    </button>
                                    <ul className={`dropdown-menu ${health.specialL}`} aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="/">Action</a></li>
                                        <li><a className="dropdown-item" href="/">Another action</a></li>
                                        <li><a className="dropdown-item" href="/">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section>
                <div className="container" dangerouslySetInnerHTML={{ __html: page.content }}></div>
            </section>
        </Layout>
    )
}
export const query = graphql`
query{
  wpPage(id: {eq: "cG9zdDoxNg=="}) {
    content
    title
  }
}`
export default HealthFinder;
