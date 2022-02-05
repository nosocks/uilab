import { useEffect, useState, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import MainContent from './MainContent'
import Sidebar from './Sidebar'
import Index from './Index'
import Loader from './Loader'

import './styles.css'

const getLabName = (path) => path.split('/').at(-1).split('.')[0].toLowerCase()

const App = ({ components, sidebarTitle = '' }) => {
  const [labs, setLabs] = useState()
  const [router, setRouter] = useState([])
  const [navTree, setNavTree] = useState([])

  useEffect(() => {
    if (components) {
      const newLabs = Object.fromEntries(
        Object.entries(components).filter(([key]) => key.includes('.lab.jsx'))
      )
      setLabs(newLabs)
      setNavTree(Object.keys(newLabs).map((path) => getLabName(path)))
    }
  }, [components])

  useEffect(() => {
    if (labs) {
      setRouter(
        Object.entries(labs).map(([routePath, lazyLab]) => {
          const labName = getLabName(routePath)
          const [, lazyComponent] = Object.entries(components).find(([key]) => {
            const componentName = getLabName(key)
            return componentName === labName
          })

          return {
            path: labName,
            lazyLab,
            lazyComponent,
          }
        })
      )
    }
  }, [labs, components])

  return (
    <BrowserRouter>
      <div className="flex w-screen h-screen">
        <Sidebar tree={navTree} title={sidebarTitle} />
        <div className="p-12 flex-1 bg-gray-50 overflow-y-auto">
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
