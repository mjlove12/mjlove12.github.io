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
    console.log(location)
    
    if (location.pathname === rootPath) {
      return (
        <div style={{ margin: 0, padding: 0, height: '100%', width: '100%', position: 'fixed' }}>
          <div className="sidebar">
            <Bio/>
          </div>
          <div className="content">
            {children()}
          </div>
        </div>
      )
    } else {
      return (
        <div style={{ margin: 0, padding: 0, height: '100%', width: '100%', position: 'fixed' }}>
          <div style={{ overflow: 'auto', height: '100%', width: '50%', margin: '0 auto' }}>
            {children()}
          </div>
        </div>
      )
    }

  }
}

export default Template
