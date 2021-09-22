import React, { useEffect } from 'react';
import { FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";
import { useStaticQuery, graphql, Link } from "gatsby";
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

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        document.getElementsByClassName("twitter-embed")[0].appendChild(script);
    }, []);
    return (
        <footer className="myFooter">
            <article className="myFooterIn">
                <section className="footerTop d-block d-sm-block d-md-none">
                    <div className="footTopInn text-center">
                        <h4>social media.</h4>
                    </div>
                </section>
                <section className="footMid">
                    <div className="container-fluid container-lg footMidInn">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-3 col-lg-3 socialBlocks twitterB">
                                <div className="twitter-embed">
                                    <a
                                        className="twitter-timeline"
                                        data-theme="light"
                                        data-tweet-limit="5"
                                        data-height="300"
                                        data-chrome="noheader nofooter noborders"
                                        href="https://twitter.com/BitsSrhr"
                                    >
                                        Tweets by Nairobits
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-6 socialBlocks text-center">
                                <div className="socialInn mx-auto">
                                    <div className="footTopInn mb-5 d-none d-sm-none d-md-block text-center">
                                        <h4>social media.</h4>
                                    </div>
                                    <ul className="d-flex align-items-center socialNav">
                                        <li><a href="/" target="_blank"><FaFacebookSquare /><span className="socialLabels">Facebook</span></a></li>
                                        <li><a href="/" target="_blank"><FaTwitter /><span className="socialLabels">twitter</span></a></li>
                                        <li><a href="/" target="_blank"><FaYoutube /><span className="socialLabels">youtube</span></a></li>
                                    </ul>
                                    <div className="btn btn-large mt-3 newsLetter">subscribe to our newsletter</div>
                                </div>

                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-3 socialBlocks twitterB">
                                <iframe title="SRHR" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNairobitssrhr&tabs=timeline&width=310&height=350&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="100%" height="350" scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                            </div>
                        </div>
                    </div>
                </section>
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
