import React from 'react'
import Bar from './Components/Bar'
import { Outlet } from 'react-router-dom'

export const RootLayout = () => {
  return (
    <>
    <Bar/>
    <Outlet/>
    </>
  )
}
