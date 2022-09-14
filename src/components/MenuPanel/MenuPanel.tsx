import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ROUTES } from 'routes'
import './MenuPanel.scss'

export const MenuPanel: React.FC = () => {
  let activeClassName = 'MenuPanel-ListItem__active'

  return (
    <nav className='MenuPanel'>
      <div className='MenuPanel-Brand'>
        <div className='MenuPanel-BrandTitle'>
          <Link className='MenuPanel-BrandTitleLink' to={ROUTES.HOME}>
            UI
          </Link>
        </div>
        <div className='MenuPanel-BrandVersion'>v1.0.0</div>
      </div>

      <div className='MenuPanel-Title'>Components</div>
      <div className='MenuPanel-List'>
        <NavLink
          className={({ isActive }) =>
            isActive ? activeClassName : 'MenuPanel-ListItem'
          }
          to={ROUTES.ACCORDION}
        >
          Accordion
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? activeClassName : 'MenuPanel-ListItem'
          }
          to={ROUTES.BUTTON}
        >
          Button
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? activeClassName : 'MenuPanel-ListItem'
          }
          to={ROUTES.ICON}
        >
          Icon
        </NavLink>
      </div>
    </nav>
  )
}
