import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'
import Link from 'gatsby-link'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          marginBottom: rhythm(2.5),
          marginTop: rhythm(2.5),
          textAlign: 'center',
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            color: 'white'
          }}
          to="/"
        >
          <img
            src={profilePic}
            alt={`mattandem`}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              width: rhythm(3),
              height: rhythm(3),
              borderRadius: '50%',
            }}
          />
        </Link>
        <br/>
        <div>
          Sharing our small <strong>adventures</strong> home and abroad.{' '}
        </div>
        {
          /*
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li>
            <Link to={"/"}>
              about
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              map
            </Link>
          </li>
        </ul>
          */
        }

      </div>
    )
  }
}

export default Bio
