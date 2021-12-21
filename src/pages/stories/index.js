import React from 'react';
import Layout from '../../components/Layout';
import StoriesTTop from '../../components/StoriesTTop';
import { Helmet } from "react-helmet";
import FeaturedStory from "../../components/FeaturedStory";
import { useStaticQuery, graphql } from 'gatsby';
import * as stostyles from './stories.module.css';

function Stories() {
  const stories = useStaticQuery(graphql`
    {
    allStories:allWpPost(
    filter: {categories: {nodes: {elemMatch: {name: {eq: "stories"}}}}}
    limit: 6
    sort: {fields: date, order: DESC}
  ) {
    edges {
      node {
        title
        slug
        uri
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
  featuredStories:allWpPost(
    limit: 3
    sort: {fields: date, order: DESC}
    filter: {categories: {nodes: {elemMatch: {name: {eq: "featuredstories"}}}}}
  ) {
    edges {
      node {
        title
        slug
        uri
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
        date(formatString: "MM-DD-YYYY")
      }
    }
  }
  }
`)

  const storiesPage = stories.allStories.edges;
  const featStories = stories.featuredStories.edges;
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>iACCESS-Stories</title>
      </Helmet>
      <header className={`pageBanner ${stostyles.stories}`}>
        <div className="pageBanInn">
          <div className="container-fluid container-fluid-sm container-fluid-md container-lg pageBanTop">
            <h1>STORIES <span className="specHead">.</span></h1>
          </div>
        </div>
      </header>
      <section className={stostyles.TopStories}>
        <div className="container-fluid container-lg">
          <div className={stostyles.featuredStories}>
            {featStories?.map((featStory, index) => {
              return (
                <FeaturedStory storytitle={featStory.node.title} src={featStory.node.featuredImage.node.localFile.childImageSharp.gatsbyImageData} altText={featStory.node.featuredImage.node.altText} storyLink={`/stories${featStory.node.uri}`} date={featStory.node.date} key={index} />
              )
            })}
          </div>
        </div>
      </section>
      <section className={stostyles.bottomStories}>
        <div className="container-fluid container-lg">
          <div className="row">
            {storiesPage?.map((pageStory, index) => {
              return (
                <StoriesTTop storytitle={pageStory.node.title} src={pageStory.node.featuredImage.node.localFile.childImageSharp.gatsbyImageData} altText={pageStory.node.featuredImage.node.altText} storyLink={`/stories${pageStory.node.uri}`} key={index} />
              )
            })}
          </div>
        </div>
      </section>
      <section className={stostyles.storiesBtm}>
        <div className="container-fluid container-lg">
          <div className="row">
            <div className={`col-12 ${stostyles.storiesContact}`}>
              <p className="text-center"><img src="imgs/writer.png" alt="Typewriter icon" /> submit a story to  - <a href="mailto:iaccess@nairobits.com" className={stostyles.sbtLink}>iaccess@nairobits.com</a></p>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Stories;
