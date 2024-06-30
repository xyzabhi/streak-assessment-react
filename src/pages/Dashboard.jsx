import React from 'react'
import SideBar from '../components/SideBar'
import sidebarMenus from '../utils/constants'

function Dashboard() {
  return (
    <div>
        <SideBar menus={sidebarMenus}/>
    </div>
  )
}

export default Dashboard