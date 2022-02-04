import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { ReactComponent as CodeIcon } from './assets/code.svg'
import { ReactComponent as CollapseIcon } from './assets/arrowdownleft.svg'

const Sidebar = ({ title, tree }) => {
  const [actives, setActives] = useState(new Set([]))
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname) {
      const pathCat = pathname.split('/').at(1)
      if (Object.keys(tree).includes(pathCat) && !actives.has(pathCat)) {
        setActives((state) => {
          const newState = new Set(state)
          newState.add(pathCat)
          return newState
        })
      }
    }
  }, [pathname, actives, tree])

  return (
    <div className="font bg-white p-10 flex-1 shadow-sm max-w-[300px]">
      <div className="flex space-x-2">
        <span className="ml-auto cursor-pointer hover:bg-gray-50 border-sm px-2 py-1 transition-all duration-200 ease-in-out">
          <CollapseIcon />
        </span>
      </div>
      <h1 className="font-bold mb-12 text-2xl select-none font-mono">
        {title || 'UILAB'}
      </h1>
      {!!tree.length && (
        <>
          <h1 className="uppercase text-xs tracking-widest text-gray-300 select-none mb-2">
            labs
          </h1>
          <div className="flex flex-col space-y-2">
            {tree.map((path) => (
              <Link
                key={path}
                to={`/${path}`}
                className={`appearance-none text-sm capitalize flex items-center font-bold p-2
                  ${
                    pathname === `/${path}`
                      ? 'text-bay-500 bg-bay-50 ml-1'
                      : 'text-gray-500'
                  }
                  rounded-md hover:ml-1 hover:bg-bay-50 hover:text-bay-400 transition-all duration-200 ease-in-out
                `}
              >
                <CodeIcon className="mr-2 fill-current" />
                <p className="text-current">{path}</p>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Sidebar
