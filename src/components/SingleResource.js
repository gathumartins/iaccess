import React from 'react';
import * as smallstyles from './SingleResource.module.css';
import ResourcePop from './ResourcePop';

function SingleResource() {
    return (
        <section type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <div className={smallstyles.resCat}>
                <h2>POLICY</h2>
            </div>
            <div className={smallstyles.resDate}>
                <h6>05-20-2021</h6>
            </div>
            <figure className={smallstyles.featImg}>
                <img src="imgs/resplace.png" alt="" className="img-fluid" />
            </figure>
            <div className={smallstyles.resSmallTitle}>
                <h1>KENYA AIDS STRATEGIC FRAMEWORK</h1>
            </div>
            <ResourcePop />
        </section>
    )
}

export default SingleResource
