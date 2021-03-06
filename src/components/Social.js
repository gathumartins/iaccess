import React, { Fragment, useEffect } from 'react';
import { FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";
import './Social.css';

function Social() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        document.getElementsByClassName("twitter-embed")[0].appendChild(script);
    }, []);
    return (
        <Fragment>
            <section className="footerTop d-block d-sm-block d-md-block d-lg-none mb-5">
                <div className="footTopInn text-center">
                    <h4>social media.</h4>
                </div>
            </section>
            <section className="footMid">
                <div className="container-fluid container-lg footMidInn">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-3 socialBlocks twitterB">
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
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 socialBlocks speSocBlocks text-center">
                            <div className="socialInn speSoc mx-auto">
                                <div className="footTopInn mb-5 d-none d-sm-none d-md-none d-lg-block text-center">
                                    <h4>social media <span className="speHead">.</span></h4>
                                </div>
                                <ul className="d-flex align-items-center socialNav">
                                    <li><a href="https://www.facebook.com/Nairobitssrhr" target="_blank" rel="noreferrer"><FaFacebookSquare /><span className="socialLabels">Facebook</span></a></li>
                                    <li><a href="https://twitter.com/BitsSrhr" target="_blank" rel="noreferrer"><FaTwitter /><span className="socialLabels">twitter</span></a></li>
                                    <li><a href="https://youtube.com/channel/UCHS3iDHMmIvhI8XrKlyykDg" target="_blank" rel="noreferrer"><FaYoutube /><span className="socialLabels">youtube</span></a></li>
                                </ul>
                                <div className="btn btn-large mt-3 newsLetter">subscribe to our newsletter</div>
                            </div>

                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-3 socialBlocks twitterB">
                            <div className="twitterInn">
                                <iframe title="SRHR" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNairobitssrhr&tabs=timeline&width=310&height=350&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="100%" height="350" scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Social
