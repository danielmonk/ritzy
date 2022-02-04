/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = ({ graphql, actions }) => {
    const { createPage, createRedirect } = actions

    createRedirect({ fromPath: 'https://ritzystudios.com/*', toPath: 'https://ritzybarbers.design/:splat', isPermanent: true, force: true })
    createRedirect({ fromPath: 'https://www.ritzystudios.com/*', toPath: 'https://ritzybarbers.design/:splat', isPermanent: true, force: true })
}