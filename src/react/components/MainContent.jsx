import React from 'react'
import Lab from './Lab'

const MainContent = ({ path = '', lab = undefined, srcComp = undefined }) => {
  return (
    <section>
      <Lab lab={lab} path={path} srcComp={srcComp} />
    </section>
  )
}

export default MainContent
