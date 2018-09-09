import React from 'react'
import Link from 'gatsby-link'
import Bio from '../components/Bio'

import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    console.log(children)

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div
          // SIDEBAR
          style={{
            height: '100%',
            width: '20%',
            position: 'fixed',
            zIndex: 1,
            top: 0,
            left: 0,
            // backgroundColor: 'lightgrey',
            overflowX: 'hidden', // disable horizontal scroll
            paddingTop: '20px',
            borderRight: '1px solid lightgrey',
            margin: 10,
          }}
        >
          <Bio/>
        </div>
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            color: '#555555',
          }}
        >
          {children()}
        </div>
      </div>
    )
  }
}

export default Template
