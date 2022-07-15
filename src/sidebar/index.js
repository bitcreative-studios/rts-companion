import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Sidebar from './Sidebar'

import './sidebar-styles.css'

const root = createRoot(document.getElementById('sidebar-root'))
root.render(
  <BrowserRouter>
    <Sidebar />
  </BrowserRouter>
)
