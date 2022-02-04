import { useEffect, useState, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import MainContent from './MainContent'
import Sidebar from './Sidebar'
import Index from './Index'

import './styles.css'

const getLabName = (path) => path.split('/').at(-1).split('.')[0].toLowerCase()

const Loader = () => (
  <div className="w-full h-full flex items-center justify-center">
    <svg
      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  </div>
)

const App = ({ componentsGlob, sidebarTitle = '' }) => {
  const [labs, setLabs] = useState()
  const [router, setRouter] = useState([])
  const [navTree, setNavTree] = useState([])

  useEffect(() => {
    if (componentsGlob) {
      const newLabs = Object.fromEntries(
        Object.entries(componentsGlob).filter(([key]) =>
          key.includes('.lab.jsx')
        )
      )
      setLabs(newLabs)
      setNavTree(Object.keys(newLabs).map((path) => getLabName(path)))
    }
  }, [componentsGlob])

  useEffect(() => {
    if (labs) {
      setRouter(
        Object.entries(labs).map(([routePath, lazyLab]) => {
          const labName = getLabName(routePath)
          const [, lazyComponent] = Object.entries(componentsGlob).find(
            ([key]) => {
              const componentName = getLabName(key)
              return componentName === labName
            }
          )

          return {
            path: labName,
            lazyLab,
            lazyComponent,
          }
        })
      )
    }
  }, [labs, componentsGlob])

  return (
    <BrowserRouter>
      <div className="flex w-screen h-screen">
        <Sidebar tree={navTree} title={sidebarTitle} />
        <div className="flex-1 bg-gray-50 overflow-y-auto">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route index element={<Index />} />
              {!!router.length &&
                router.map(({ path, lazyLab, lazyComponent }) => (
                  <Route
                    path={path}
                    key={path}
                    element={
                      <MainContent
                        path={path}
                        lab={lazyLab}
                        srcComp={lazyComponent}
                      />
                    }
                  />
                ))}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
