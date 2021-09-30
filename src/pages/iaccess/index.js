import React from 'react';
import Partners from '../../components/Partners';
import Layout from '../../components/Layout';
import { Helmet } from 'react-helmet';
import './iaccess.css';

function Iaccess() {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>iACCESS-About Iaccess</title>
            </Helmet>
            <header className="pageBanner iaccess">
                <div className="pageBanInn">
                    <div className="container-fluid container-fluid-sm container-fluid-md container-lg pageBanTop">
                        <h1>WHAT IS IACCESS <span className="specHead">?</span></h1>
                    </div>
                </div>
            </header>
            <section className="iaccessCont">
                <div className="container-fluid container-fluid-sm container-fluid-md container-lg iaccessTop">
                    <p>The iACCESS Hub is a one-stop interactive website platform that contains policies, events, youth-friendly centers referral services, and Adolescent and Youth Sexual Reproductive Health (AYSRHR) resources, from gender and all-inclusive perspective.</p>
                    <img src="imgs/about.png" alt="About iACCESS Illustration" className="img-fluid" />
                </div>
                <div className="container-fluid container-fluid-sm container-fluid-md container-lg iaccessContTwo">
                    <h2 className="mb-3">WHY iACCESS?</h2>
                    <p>The SRHR Hub was created to promote and share experience, and tools to integrate for best practices and share knowledge into the AYSH programming with a particular focus on sub-counties and counties in Kenya. The platform’s aim is to be able to link youth and adolescents to Youth Friendly centers within their geographical region and to help program implementers, county and sub-county officials, and all stakeholders to collaborate with youth and understand their needs and desires related to their health and sexuality.</p>
                    <p>The platform is built upon HCD and AYSRH information and resources and provides opportunities for youth, adolescents, county government, donors, program implementers, designers, and all stakeholders to work together.</p>
                    <p>NairoBits aim is to ensure that especially youth and adolescents from all geographical backgrounds can access credible and practical information on AYSRH and most importantly use the platform to share their SRHR lived experiences and realities.</p>
                    <p>The Online Hub will include best practices, key recommendations, opinions and analysis by youth, adolescents, grassroots organizations, civil society organizations and Nairobi City County information and documents, which will be available for use by advocates, activists and youth champions to influence and lobby for dignified and inclusive AYSRHR responses in the country. The SRHR Hub is youth led and will be managed by NairoBits Trust and youth peer educators.</p>
                </div>
            </section>
            <Partners />
        </Layout>
    )
}

export default Iaccess;