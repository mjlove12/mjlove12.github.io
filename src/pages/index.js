import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import './index.css'

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
            <Link style={{ boxShadow: 'none', color: 'white' }} to={node.fields.slug}>
              <div
                key={node.fields.slug}
                className="cover"
              >
                <Img 
                  style={{ width: '100%', height: '250px' }}
                  sizes={node.frontmatter.coverImage.childImageSharp.sizes}
                />
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
                    {title}
                  </h1>
                  <small style={{ color: 'white' }}>{node.frontmatter.date}</small>
                </div>
              </div>
            </Link>
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
