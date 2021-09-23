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
              the <span className="speHead banSpan">SRHR</span><img src="imgs/banarrow.svg" className="banArrow" alt="srhr pointer" /><span className="heroDes">"Sexual Reproductive health"</span><br />
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
                <Link to="/health" className="heroLinks">HEALTH FINDER <span className="arrowmargin"><ImArrowRight /></span></Link>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 secondHero">
              <div className="container-fluid container-lg d-flex flex-column align-items-stretch heroBanTwoInn">
                <p>Check out real life stories</p>
                <Link to="/stories" className="heroLinks">STORIES <span className="arrowmargin"><ImArrowRight /></span></Link>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 thirdHero">
              <div className="container-fluid container-lg d-flex flex-column align-items-stretch heroBanTwoInn">
                <p>Access free webinars, Books & courses<br />
                  from the comfort of your device</p>
                <Link to="/resources" className="heroLinks">RESOURCES <span className="arrowmargin"><ImArrowRight /></span></Link>
              </div>
            </div>
          </div>
        </section>
        <section className="heroBtm">
          <div className="container-fluid container-lg specialPads heroBtmInn">
            <div className="row">
              <div className="col-12 col-sm-8 col-md-7 col-lg-6 homeheads heroBtmCont">
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
        <div className="container-fluid container-lg specialPads healthFinderInn">
          <div className="row">
            <div className="col-12 col-sm-8 col-md-6 homeheads healthInnCont">

              <h1 className="healthHead">Find a
                health
                service
                provider<span className="ml-3 speHead speH">.</span></h1>
            </div>

            <div className="col-12 col-sm-4 col-md-6 healthInnCont">
              <h2>What service do you want?</h2>
              <ul className="row mt-5 finderBtns">
                <li className="col-12 col-sm-6"><div href="/" className="mybtn">Counselling</div></li>
                <li className="col-12 col-sm-6"><div href="/" className="mybtn">Testing</div></li>
                <li className="col-12 col-sm-6"><div href="/" className="mybtn">I Just need help!</div></li>
              </ul>

              <div className="mt-5 healthinfo">
                <a href="/stories">HEALTH FINDER<span className="arrowmargin"><ImArrowRight /></span></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="homeStories">
        <div className="container-fluid container-lg specialPads">
          <div className="row">
            <div className="col-12 mb-5">
              <div className="row">
                <div className="col-6 homeheads">
                  <h1 className="storiesHead">STORIES<span className="ml-3 speHead speH">.</span></h1>
                </div>
                <div className="col-6 text-right headerNavs storyinfo">
                  <p className="mx-5">Check out real life stories</p>
                  <a href="/stories">STORIES<span className="arrowmargin"><ImArrowRight /></span></a>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-4 story">
                  <div className="blackSquare"></div>
                  <div className="storiesInn">
                    <div className="storiesInnTop mb-4">
                      <h3>A mom abit too early ...</h3>
                    </div>
                    <img src="imgs/storyone.jpg" alt="Home stories images" className="img-fluid" />
                    <a href="/" className="storyLink">Read more <span className="arrowmargin"><ImArrowRight /></span></a>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 story">
                  <div className="blackSquare"></div>
                  <div className="storiesInn">
                    <div className="storiesInnTop mb-4">
                      <h3>A mom abit too early ...</h3>
                    </div>
                    <img src="imgs/storytwo.jpg" alt="Home stories images" className="img-fluid" />
                    <a href="/" className="storyLink">Read more <span className="arrowmargin"><ImArrowRight /></span></a>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 story">
                  <div className="blackSquare"></div>
                  <div className="storiesInn">
                    <div className="storiesInnTop mb-4">
                      <h3>A mom abit too early ...</h3>
                    </div>
                    <img src="imgs/storythree.jpg" alt="Home stories images" className="img-fluid" />
                    <a href="/" className="storyLink">Read more <span className="arrowmargin"><ImArrowRight /></span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="homeResources">
        <div className="container-fluid container-lg specialPads">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-6 homeheads mb-4">
                  <h1 className="storiesHead">RESOURCES<span className="ml-3 speHead speH">.</span></h1>
                </div>
                <div className="col-6 text-right resourceinfo headerNavs">
                  <p className="mx-5">Access free webinars, Books & courses
                    from the comfort of your device</p>
                  <a href="/resources">OUR RESOURCES <span className="arrowmargin"><ImArrowRight /></span></a>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-4 homeResource">
                  <div className="resourceInn">
                    <div className="resourceInnTop">
                      <h3>LEARNING<br />
                        MATERIALS</h3>
                    </div>
                    <img src="imgs/learning.jpg" alt="learning materials" className="img-fluid" />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 homeResource">
                  <div className="resourceInn">
                    <div className="resourceInnTop">
                      <h3>ANIMATIONS &<br />
                        INFOGRAPHICS</h3>
                    </div>
                    <img src="imgs/infographics.jpg" alt="infographics and animations" className="img-fluid" />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 homeResource">
                  <div className="resourceInn">
                    <div className="resourceInnTop">
                      <h3>POLICY<br />
                        DOCUMENTS</h3>
                    </div>
                    <img src="imgs/policies.jpg" alt="Policies documents" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Partners />
    </Layout>
  )
}

export default IndexPage
