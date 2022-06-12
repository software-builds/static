// gatsby-node.js
import type { GatsbyNode } from 'gatsby'

const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
	const { createRedirect } = actions;
    createRedirect({
        fromPath: `/*`,
        toPath: `/`,
        statusCode: 404
      })
}

export { createPages }