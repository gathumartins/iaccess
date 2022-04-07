import React from 'react';
import { graphql } from 'gatsby';
import LayoutTwo from '../../components/LayoutTwo';
import { Helmet } from 'react-helmet';
import * as termstyles from './terms.module.css';

function Terms({ data}) {
    return (
        <LayoutTwo>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>iACCESS-{data.wpPage.title}</title>
            </Helmet>
            <header className={`pageBanner ${termstyles.terms}`}>
                <div className="pageBanInn">
                    <div className="container-fluid container-fluid-sm container-fluid-md container-lg pageBanTop">
                        <h1>{data.wpPage.title} <span className="specHead">.</span></h1>
                    </div>
                </div>
            </header>
            <section className={termstyles.privCont}>
                <div className="row">
                    <div className="col-12">
                        <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }}></div>
                    </div>
                </div>
            </section>
        </LayoutTwo>
    )
}
export const query = graphql` 
query MyTerms {
  wpPage(id: {eq: "cG9zdDoxODk="}) {
    title
    uri
    content
  }
}
`
export default Terms;