import React from 'react';
import LayoutTwo from '../../components/LayoutTwo';
import { Helmet } from 'react-helmet';
import './privacy.css';

function Privacy() {
    return (
        <LayoutTwo>
            <Helmet>
                <meta charSet="utf-8" />
                <title>iACCESS-Privacy Policy</title>
            </Helmet>
            <header className="pageBanner privacy">
                <div className="pageBanInn">
                    <div className="container-fluid container-fluid-sm container-fluid-md container-lg pageBanTop">
                        <h1>Privacy policy <span className="specHead">?</span></h1>
                    </div>
                </div>
            </header>
            <section className="privCont">
                <div className="row">
                    <div className="col-12">
                        <p>The SRHR Hub was created to promote and share experience, and tools to integrate for best practices and share knowledge into the AYSH programming with a particular focus on sub-counties and counties in Kenya. The platform’s aim is to be able to link youth and adolescents to Youth Friendly centers within their geographical region and to help program implementers, county and sub-county officials, and all stakeholders to collaborate with youth and understand their needs and desires related to their health and sexuality.
                        </p>
                        <p>
                            The platform is built upon HCD and AYSRH information and resources and provides opportunities for youth, adolescents, county government, donors, program implementers, designers, and all stakeholders to work together.
                        </p>
                        <p>
                            NairoBits aim is to ensure that especially youth and adolescents from all geographical backgrounds can access credible and practical information on AYSRH and most importantly use the platform to share their SRHR lived experiences and realities.
                        </p>
                        <p>
                            The Online Hub will include best practices, key recommendations, opinions and analysis by youth, adolescents, grassroots organizations, civil society organizations and Nairobi City County information and documents, which will be available for use by advocates, activists and youth champions to influence and lobby for dignified and inclusive AYSRHR responses in the country. The SRHR Hub is youth led and will be managed by NairoBits Trust and youth peer educators.
                        </p>
                    </div>
                </div>
            </section>
        </LayoutTwo>
    )
}

export default Privacy;