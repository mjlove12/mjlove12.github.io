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
      <div style={{ margin: 0, height: '100%', position: 'fixed' }}>
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
            width: 'calc(80% - 20px)',
            verticalAlign: 'top',
            height: 'calc(100% - 10px)',
            overflow: 'auto',
            marginLeft: 20,
            paddingRight: 60,
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
