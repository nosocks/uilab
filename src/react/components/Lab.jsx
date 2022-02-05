import { useState, useEffect, lazy } from 'react'
import reactElementToJSXString from 'react-element-to-jsx-string'
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live'

import theme from './theme'

const Lab = ({ lab = undefined, path = '', srcComp = undefined }) => {
  const [labs, setLabs] = useState({})
  const [scope, setScope] = useState({})

  useEffect(() => {
    if (lab) {
      ;(async () => {
        const asyncLabs = await lab()
        if (asyncLabs.deps) {
          const { deps, ...restLabs } = asyncLabs
          setScope((state) => ({ ...state, ...deps }))
          setLabs(restLabs)
        } else {
          setLabs(asyncLabs)
        }
      })()
    }

    // clean up (react-router is not unmounting on route change)
    return () => {
      setLabs({})
    }
  }, [lab])

  useEffect(() => {
    if (path && srcComp) {
      setScope((state) => ({
        ...state,
        [`${path[0].toUpperCase()}${path.substring(1)}`]: lazy(srcComp),
      }))
    }
  }, [path, srcComp])

  return (
    <div className="flex flex-col space-y-8">
      {Object.entries(labs).map(([labName, Component]) => {
        const code = reactElementToJSXString(Component, {
          showDefaultProps: false,
          showFunctions: true,
        })
        return (
          <div key={`${labName}-${path}`} className="font">
            <h1 className="font-bold mb-2 capitalize select-none">
              {labName.replace(
                /([A-Z])(?=[A-Z][a-z])|([a-z])(?=[A-Z])/g,
                '$& '
              )}
            </h1>
            <LiveProvider code={code} scope={scope} theme={theme}>
              <LiveEditor className="rounded-md max-w-3xl" />
              <LiveError className="font text-sm mt-4 leading-relaxed text-red-500" />
              <LivePreview className="mt-4" />
            </LiveProvider>
          </div>
        )
      })}
    </div>
  )
}

export default Lab
