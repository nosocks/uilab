import React from 'react'
import Lab from './Lab'

const MainContent = ({ path = '', lab = undefined, srcComp = undefined }) => {
  return (
    <section className="p-8 max-w-screen-lg mx-auto">
      {/* {Docs && (<div className={docsStyles}>
        <Docs />
      </div>)} */}
      <Lab lab={lab} path={path} srcComp={srcComp} />
    </section>
  )
}

export default MainContent
