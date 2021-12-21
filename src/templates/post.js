import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import FeaturedStory from '../components/FeaturedStory';
import './post.css';

const Page = ({ data }) => {
  const post = data.wpPost;
  return (
    <Layout>
      <main className="layPad">
        <section className="postPage">
          <div className="featPostPage" >
            <FeaturedStory storytitle={post.title} date={post.date} src={post.featuredImage.node.localFile.childImageSharp.gatsbyImageData} altText={post.featuredImage.node.altText} />
          </div>
          <div className="container-fluid container-lg postPageCont">
            <div className="postContentCont" dangerouslySetInnerHTML={{ __html: post.content }}>
            </div>
          </div>
        </section>
      </main>

    </Layout>
  )
}

export const query = graphql`
query($databaseId:Int!){
  wpPost(databaseId: {eq:$databaseId}) {
    content
    date(formatString: "MM-DD-YYYY")
    title
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
    databaseId
  }
}`

export default Page;