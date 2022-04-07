import * as React from "react";
import Layout from "../components/Layout";
import { ImArrowRight } from 'react-icons/im';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import * as homestyles from './index.module.css';
import { GatsbyImage } from "gatsby-plugin-image";
import Partners from '../components/Partners';
import StoriesTTop from '../components/StoriesTTop';

const IndexPage = () => {
  const resourceCats = useStaticQuery(graphql`
    {
    allWpCategory(
    filter: {parentId: {eq: "dGVybTo4NQ=="}}
    sort: {order: ASC, fields: id}
  ) {
    edges {
      node {
        id
        name
        slug
        categoryImage {
          catLink
          catImage {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
            altText
          }
        }
      }
    }
  }
      wp {
        allSettings {
          generalSettingsUrl
        }
      }
    allWpPost(
    filter: {categories: {nodes: {elemMatch: {name: {eq: "stories"}}}}}
    limit: 3
    sort: {fields: date, order: DESC}
  ) {
    edges {
      node {
        title
        slug
        uri
        categories{
          nodes{
            name
          }
        }
        featuredImage {
        node {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
      }
    }
  }
  }
`)
  const resCats = resourceCats.allWpCategory.edges;
  const homeStories = resourceCats.allWpPost.edges;
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>iACCESS-Home</title>
      </Helmet>
      <header className={homestyles.heroBanner}>
        <section className={homestyles.heroBanInn}>
          <div className={`container-fluid container-fluid-sm container-fluid-md container-lg ${homestyles.heroBanTop}`}>
            <h1>Welcome to<br />
              the <span className={`${homestyles.speHead} ${homestyles.banSpan}`}>SRHR</span><img src="imgs/banarrow.svg" className={homestyles.banArrow} alt="srhr pointer" /><span className={homestyles.heroDes}>"Sexual Reproductive Health Rights"</span><br />
              Knowledge<br />
              Resource<br />
              hub<span className={`${homestyles.speHead} ${homestyles.banSpan}`}>.</span><br />
              <span className={homestyles.heroDes}>Powered by NairoBits Trust</span>
            </h1>
            <img src="imgs/heroimage.png" className="img-fluid" alt="Youth teens" />
          </div>
        </section>
        <section className="container-fluid">
          <div className={`row ${homestyles.heroBanTwo}`}>
            <div className={`col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 ${homestyles.firstHero}`}>
              <div className={`container-fluid container-lg d-flex flex-column align-items-stretch ${homestyles.heroBanTwoInn}`}>
                <p>Find a health service provider</p>
                <Link to="/health" className={homestyles.heroLinks}>HEALTH FINDER <span className={homestyles.arrowmargin}><ImArrowRight /></span></Link>
              </div>
            </div>
            <div className={`col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 ${homestyles.secondHero}`}>
              <div className={`container-fluid container-lg d-flex flex-column align-items-stretch ${homestyles.heroBanTwoInn}`}>
                <p>Check out real life stories</p>
                <Link to="/stories" className={homestyles.heroLinks}>STORIES <span className={homestyles.arrowmargin}><ImArrowRight /></span></Link>
              </div>
            </div>
            <div className={`col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 ${homestyles.thirdHero}`}>
              <div className={`container-fluid container-lg d-flex flex-column align-items-stretch ${homestyles.heroBanTwoInn}`}>
                <p>Access free webinars, Books & courses<br />
                  from the comfort of your device</p>
                <Link to="/resources" className={homestyles.heroLinks}>RESOURCES <span className={homestyles.arrowmargin}><ImArrowRight /></span></Link>
              </div>
            </div>
          </div>
        </section>
        <section className={homestyles.heroBtm}>
          <div className={`container-fluid container-lg ${homestyles.specialPads} heroBtmInn`}>
            <div className="row">
              <div className={`col-12 col-sm-8 col-md-7 col-lg-6 ${homestyles.homeheads} ${homestyles.heroBtmCont}`}>
                <h1>ABOUT iACCESS <span className={`ml-3 ${homestyles.speHead} ${homestyles.speH}`}>!</span></h1>
              </div>
              <div className={`col-12 col-sm-4 col-md-5 col-lg-6 ${homestyles.heroBtmCont}`}>
                <p>The iACCESS Hub is a one-stop interactive website platform that contains policies, events, youth-friendly centers referral services, and Adolescent and Youth Sexual Reproductive Health (AYSRHR) resources, from gender and all-inclusive perspective.</p>
              </div>
            </div>
          </div>
        </section>
      </header>
      <section className="healthFinder">
        <div className={`container-fluid container-lg ${homestyles.specialPads} healthFinderInn`}>
          <div className="row">
            <div className={`col-12 col-sm-8 col-md-6 ${homestyles.homeheads} ${homestyles.healthInnCont}`}>

              <h1 className={homestyles.healthHead}>FIND A HEALTH SERVICE PROVIDER<span className={`ml-3 ${homestyles.speHead} ${homestyles.speH}`}>.</span></h1>
            </div>

            <div className={`col-12 col-sm-4 col-md-6 ${homestyles.healthInnCont}`}>
              <h2>What service do you want?</h2>
              <ul className={`row mt-5 ${homestyles.finderBtns}`}>
                <li className="col-12 col-sm-6"><div href="/" className={homestyles.mybtn}>Counselling</div></li>
                <li className="col-12 col-sm-6"><div href="/" className={homestyles.mybtn}>Testing</div></li>
                <li className="col-12 col-sm-6"><div href="/" className={homestyles.mybtn}>I Just need help!</div></li>
              </ul>

              <div className={`mt-5 ${homestyles.healthinfo}`}>
                <a href="/stories">HEALTH FINDER<span className={homestyles.arrowmargin}><ImArrowRight /></span></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={homestyles.homeStories}>
        <div className={`container-fluid container-lg ${homestyles.specialPads}`}>
          <div className="row">
            <div className="col-12 mb-5">
              <div className="row">
                <div className={`col-12 col-md-6 ${homestyles.homeheads}`}>
                  <h1 className={homestyles.storiesHead}>STORIES<span className={`ml-3 ${homestyles.speHead} ${homestyles.speH}`}>.</span></h1>
                </div>
                <div className={`col-12 col-md-6 text-right ${homestyles.headerNavs} ${homestyles.storyinfo}`}>
                  <p className="mx-md-5">Check out real life stories</p>
                  <a href="/stories">STORIES<span className={`${homestyles.arrowmargin} my-3`}><ImArrowRight /></span></a>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className={`row ${homestyles.homeSHolder}`}>
                {homeStories?.map((homeStory, index) => {
                  return (
                    <StoriesTTop storytitle={homeStory.node.title} storyLink={`/stories${homeStory.node.uri}`} src={homeStory.node.featuredImage.node.localFile.childImageSharp.gatsbyImageData} altText={homeStory.node.featuredImage.node.altText} key={index} />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={homestyles.homeResources}>
        <div className={`container-fluid container-lg ${homestyles.specialPads}`}>
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className={`col-12 col-md-6 ${homestyles.homeheads} mb-4`}>
                  <h1 className={homestyles.storiesHead}>RESOURCES<span className={`ml-3 ${homestyles.speHead} ${homestyles.speH}`}>.</span></h1>
                </div>
                <div className={`col-12 col-md-6 text-right ${homestyles.resourceinfo} ${homestyles.headerNavs}`}>
                  <p className="mx-md-5">Access free webinars, Books & courses
                    from the comfort of your device</p>
                  <a href="/resources">OUR RESOURCES <span className={homestyles.arrowmargin}><ImArrowRight /></span></a>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                {resCats?.map((resCat, index) => {
                  return (
                  <div className={`col-12 col-sm-12 col-md-4 ${homestyles.homeResource}`} key={index}>
                      <a href={resCat.node.catLink} className={homestyles.resourceInn}>
                        <div className={homestyles.resourceInnTop}>
                          <h3>{resCat.node.name}</h3>
                        </div>
                        <GatsbyImage image={resCat.node.categoryImage.catImage.localFile.childImageSharp.gatsbyImageData} alt={resCat.node.categoryImage.catImage.altText} className="img-fluid" />
                      </a>
                    </div>
                  )
                })}
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
