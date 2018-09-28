import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={siteTitle} />
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div key={node.fields.slug} style={{ width: '100%', position: 'relative', color: 'white' }}>
              <Img style={{ width: '100%', height: '250px' }} sizes={node.frontmatter.coverImage.childImageSharp.sizes} />
              <div
                style={{
                  position: 'absolute',
                  top: '0px',
                  left: '8px',
                }}
              >
                <h1
                  style={{
                    marginBottom: 0,
                  }}
                >
                  <Link style={{ boxShadow: 'none', color: 'white' }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h1>
                <small style={{ color: '#333333' }}>{node.frontmatter.date}</small>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { eq: "false" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            coverImage {
              childImageSharp {
                sizes(maxWidth: 1200) {
                  ...GatsbyImageSharpSizes
                }
              }    
            }
            draft
          }
        }
      }
    }
  }
`
