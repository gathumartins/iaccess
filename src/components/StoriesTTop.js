import React from 'react';
import { ImArrowRight } from 'react-icons/im';
import { Link } from 'gatsby';
import './StoriesComp.css'

function StoriesTTop({ storytitle, src, altText, storyLink }) {
    return (
        <div className="col-12 col-sm-12 col-md-4 story">
            <div className="blackSquare"></div>
            <div className="storiesInn">
                <div className="storiesInnTop mb-4">
                    <h3>{storytitle}</h3>
                </div>
                <img src={src} alt={altText} className="img-fluid" />
                <Link to={storyLink} className="storyLink">Read more <span className="arrowmargin"><ImArrowRight /></span></Link>
            </div>
        </div>
    )
}

export default StoriesTTop
