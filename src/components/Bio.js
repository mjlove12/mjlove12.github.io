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
          textAlign: 'center',
        }}
      >
        <img
          src={profilePic}
          alt={`mattandem`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <br/>
        <p>
          Sharing our small <strong>adventures</strong> home and abroad.{' '}
        </p>
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
      </div>
    )
  }
}

export default Bio
