import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const Page = ({ data }) => {
    const page = data.wpPage;
    return (
        <Layout>
            <main className="layPad">
                <h1>{page.title}</h1>
            </main>

        </Layout>
    )
}


export const query = graphql`
query($databaseId:Int!){
     wpPage(databaseId: {eq: $databaseId}) {
    title
    content
  }
}`

export default Page;