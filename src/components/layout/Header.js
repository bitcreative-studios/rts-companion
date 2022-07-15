import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import ToolboxSelectMenu from './Header/ToolboxSelectMenu'
import SearchBar from './SearchBar'

const tabs = [
  { name: 'Packages', href: '/packages', current: true },
  { name: 'DSP Summary', href: '/dsp', current: false },
  { name: 'Flex', href: '/flex', current: false },
  { name: 'Labor Tracking', href: '/labor-tracking', current: false },
]

const Header = ({ station }) => {
  const [value, setValue] = useState(station)
  return (
    <div className="w-full ">
      <div>
        {/*<nav className="-mb-px flex space-x-8" aria-label="Tabs">*/}
        {/*  /!* Tabs *!/*/}
        {/*  {tabs.map(tab => (*/}
        {/*    <Link*/}
        {/*      key={tab.name}*/}
        {/*      to={tab.href}*/}
        {/*      className={clsx(*/}
        {/*        tab.current*/}
        {/*          ? 'border-orange-500 text-gray-900'*/}
        {/*          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',*/}
        {/*        'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'*/}
        {/*      )}*/}
        {/*      aria-current={tab.current ? 'page' : undefined}*/}
        {/*    >*/}
        {/*      {tab.name}*/}
        {/*    </Link>*/}
        {/*  ))}*/}
        {/*</nav>*/}
        {/*<ToolboxSelectMenu />*/}
        {/*<span className="inline-block w-full text-center mt-4 text-3xl font-semibold text-cyan-600">*/}
        {/*  {station}*/}
        {/*</span>*/}
        <SearchBar />
      </div>
    </div>
  )
}
export default Header
