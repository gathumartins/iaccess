import * as React from "react";
import Layout from "../components/Layout";
import { ImArrowRight } from 'react-icons/im';
import { Link } from 'gatsby';
import './index.css';
import Partners from '../components/Partners';

const IndexPage = () => {
  return (
    <Layout>
      <header className="heroBanner">
        <section className="heroBanInn">
          <div className="container-fluid container-fluid-sm container-fluid-md container-lg heroBanTop">
            <h1>Welcome to<br />
              the <span className="speHead banSpan">SRHR</span><span className="heroDes">"Sexual Reproductive health"</span><br />
              Knowledge<br />
              Resource<br />
              hub<span className="speHead banSpan">.</span><br />
              <span className="heroDes">Powered by NairoBits Trust</span>
            </h1>
            <img src="imgs/heroimage.png"
              srcSet="imgs/heroimage@2x.png 2x,
             imgs/heroimage@3x.png 3x"
              className="img-fluid" alt="Youth teens" />
          </div>
        </section>
        <section className="container-fluid">
          <div className="row heroBanTwo">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 firstHero">
              <div className="container-fluid container-lg d-flex flex-column align-items-stretch heroBanTwoInn">
                <p>Find a health service provider</p>
                <Link to="/health" className="heroLinks">HEALTH FINDER <span className="ml-5"><ImArrowRight /></span></Link>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 secondHero">
              <div className="container-fluid container-lg d-flex flex-column align-items-stretch heroBanTwoInn">
                <p>Check out real life stories</p>
                <Link to="/stories" className="heroLinks">STORIES <span className="ml-5"><ImArrowRight /></span></Link>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 thirdHero">
              <div className="container-fluid container-lg d-flex flex-column align-items-stretch heroBanTwoInn">
                <p>Access free webinars, Books & courses<br />
                  from the comfort of your device</p>
                <Link to="/resources" className="heroLinks">RESOURCES <span className="ml-5"><ImArrowRight /></span></Link>
              </div>
            </div>
          </div>
        </section>
        <section className="heroBtm">
          <div className="container-fluid container-lg heroBtmInn">
            <div className="row">
              <div className="col-12 col-sm-8 col-md-7 col-lg-6 heroBtmCont">
                <h1>ABOUT iACCESS <span className="ml-3 speHead speH">!</span></h1>
              </div>
              <div className="col-12 col-sm-4 col-md-5 col-lg-6 heroBtmCont">
                <p>The iACCESS Hub is a one-stop interactive website platform that contains policies, events, youth-friendly centers referral services, and Adolescent and Youth Sexual Reproductive Health (AYSRHR) resources, from gender and all-inclusive perspective.</p>
              </div>
            </div>
          </div>
        </section>
      </header>
      <section className="healthFinder">
        <div className="container-fluid container-lg healthFinderInn">
          <div className="row">
            <div className="col-12 col-sm-8 col-md-6 healthInnCont">

              <h1>Find a
                health
                service
                provider<span className="ml-3 speHead speH">.</span></h1>
            </div>

            <div className="col-12 col-sm-4 col-md-6 healthInnCont"></div>
          </div>
        </div>
      </section>
      <Partners />
    </Layout>
  )
}

export default IndexPage
