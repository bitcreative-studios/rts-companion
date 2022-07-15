import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import ToolboxSelectMenu from './Header/ToolboxSelectMenu'
import SearchBar from './SearchBar'
import UserHeader from './Header/UserHeader'

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
        <SearchBar />
        <UserHeader />
      </div>
    </div>
  )
}
export default Header
