import React from 'react'
import Link from 'gatsby-link'
import Bio from '../components/Bio'
import './index.css'

import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <div style={{ margin: 0, padding: 0, height: '100%', width: '100%', position: 'fixed' }}>
        <div
          // SIDEBAR
          style={{
            height: '100%',
            display: 'inline-block',
            width: '20%',
            overflow: 'auto',
            verticalAlign: 'top',
            borderRight: '1px solid lightgrey',
          }}
        >
          <Bio/>
        </div>
        <div
          style={{
            display: 'inline-block',
            width: '80%',
            verticalAlign: 'top',
            height: '100%',
            overflow: 'auto',
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
