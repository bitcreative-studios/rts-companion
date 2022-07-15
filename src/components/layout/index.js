import React, { useState } from 'react'
import Header from './Header'
import { Route, Routes } from 'react-router-dom'
import ProfilePage from '../Tools/ProfilePage'
import VolumeRouteSummary from '../Tools/SosAmDebrief/VolumeRouteSummary'

const SidebarShell = () => {
  const [station, setStation] = useState('DGT8')
  const handleSetStation = stationName => {
    setStation(stationName)
  }

  return (
    <div className="fixed inset-0">
      <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
        {/* Title Area */}
        <div>
          <Header station={station} onChange={handleSetStation} />
        </div>
        {/* Replace with Tools */}
        <div className="relative mt-6 flex-1 px-4 sm:px-6">
          {/*<VolumeRouteSummary />*/}
        </div>
      </div>
    </div>
  )
}
export default SidebarShell
