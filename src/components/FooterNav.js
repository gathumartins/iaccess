import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby";

function FooterNav() {
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
    const currentYear = new Date().getFullYear();
    const footMenuItems = ftMenu.allWpMenuItem.nodes;
    return (

        <section className="footBtm">
            <div className="container-fluid container-lg footMenuContainer">
                <div className="row footRow">
                    <div className="col-12 col-sm-3 col-md-2 footLogo">
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
                                            <Link to={footMenuItem.path} className="nav-link" activeClassName="current-flink">{footMenuItem.title}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul >
                        <ul className="d-flex align-items-end footLinks mt-10">
                            <li><Link to="/privacy" className="nav-link" activeClassName="current-page">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="nav-link" activeClassName="current-page">Terms & Conditions</Link></li>
                            <li className="copyRight">&copy; {currentYear} All Rights Reserved</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FooterNav
