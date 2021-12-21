import React from 'react';
import { ImArrowRight } from 'react-icons/im';
import { Link } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import './FeaturedStory.css'

function FeaturedStory({ storytitle, src, altText, storyLink, date }) {
    return (
        <div className="featuredStory">
            <div className="largeStories">
                <div className="largeStoriesLeft">
                    <div className="largeStoriesLeftInn">
                        <div className="largeStoriesLeftTop">
                            <h5><span className="largestoryTag">SEXUAL ABUSE</span><br />{date}</h5>
                        </div>
                        <div className="largeStoriesLeftBtm">
                            <div className="bigStoryBlackSq"></div>
                            <h2 className="bigStoryHeading">{storytitle}</h2>
                            <Link to={storyLink} className="storyLink arrLgScreen">Read more <span className="arrowmargin"><ImArrowRight /></span></Link>
                        </div>
                    </div>
                </div>
                <div className="largeStoriesRight">
                    <GatsbyImage image={src} className="img-fluid featuredStoryImg" alt={altText} />
                </div>
                <Link to={storyLink} className="storyLink arrSmScreen">Read more <span className="arrowmargin"><ImArrowRight /></span></Link>
            </div>
        </div>
    )
}

export default FeaturedStory
