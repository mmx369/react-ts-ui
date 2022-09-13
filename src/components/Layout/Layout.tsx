import Header from 'components/Header'
import MenuPanel from 'components/MenuPanel'
import React from 'react'

interface ILayoutProps {
  children?: React.ReactNode
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className='Layout'>
      <MenuPanel />
      <Header />
      <div className='Layout-Container'>{children}</div>
    </div>
  )
}
