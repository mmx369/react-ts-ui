import { ButtonPage, HomePage, IconPage } from 'pages'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ROUTES } from 'routes'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.BUTTON} element={<ButtonPage />} />
      <Route path={ROUTES.ICON} element={<IconPage />} />
    </Routes>
  </BrowserRouter>
)
