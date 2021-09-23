import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby";
import Social from './Social';
import './Footer.css';
function Footer() {
    const ftMenu = useStaticQuery(graphql`
    {
        allWpMenuItem(
            filter: {menu: {node: {slug: {eq: "primary-menu"}}}, parentDatabaseId: {eq: 0}}
        ) {
            nodes {
            path
            title:label
            }
        }
        }
    `)
    const footMenuItems = ftMenu.allWpMenuItem.nodes;
    return (
        <footer className="myFooter">
            <article className="myFooterIn">
                <Social className="hidePages" />
                <section className="footBtm">
                    <div className="container-fluid container-lg footMenuContainer">
                        <div className="row">
                            <div className="col-12 col-sm-3 col-md-2 text-xs-center">
                                <img src="/imgs/logo.png" srcSet="/imgs/logo@2x.png 2x,
             /imgs/logo@3x.png 3x" alt="i access footer logo" /><br />
                                <img src="/imgs/bitslogo.png" alt="Sponsored by Bits logo" srcSet="/imgs/bitslogo@2x.png 2x, /imgs/bitslogo@3x.png 3x" className="mt-3" />
                            </div>
                            <div className="col-12 col-sm-9 col-md-10">
                                <ul className="d-flex align-items-end footLinks mt-10">
                                    {
                                        footMenuItems?.map((footMenuItem, index) => {
                                            return (
                                                <li key={index}>
                                                    <Link to={footMenuItem.path} className="nav-link" activeClassName="current-page">{footMenuItem.title}</Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul >
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        </footer>
    )
}

export default Footer;
