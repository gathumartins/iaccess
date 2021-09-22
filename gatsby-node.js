const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {

    const { createPage } = actions;

    const queryResult = await graphql(`
    {
    pageQuery: allWpPage {
        nodes {
        databaseId
        uri
        }
    }
    }
    `);

    if (queryResult.errors) {
        reporter.panic('error loading events', queryResult.errors);
        return
    }

    const pages = queryResult.data.pageQuery.nodes;
    pages.forEach((page) => {
        createPage({
            path: page.uri,
            component: path.resolve(`./src/templates/page.js`),

            context: {
                databaseId: page.databaseId
            },
        })
    })
}
