import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import FeaturedStory from '../components/FeaturedStory';
import './post.css'

const Page = ({ data }) => {
    const post = data.wpPost;
    return (
        <Layout>
            <main className="layPad">
                <section className="postPage">
                    <div className="container-fluid container-lg postPageCont">
                        <FeaturedStory storytitle={post.title} date={post.date} src={post.featuredImage.node.sourceUrl} altText={post.featuredImage.node.altText} className="featPostPage" />
                        <div className="postContentCont">
                            {post.content}
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
        sourceUrl
        author {
          node {
            avatar {
              url
            }
            firstName
            lastName
          }
        }
      }
    }
    databaseId
  }
}`
let specialPostHead = document.querySelector('.bigStoryHeading');
console.log(specialPostHead);
export default Page;