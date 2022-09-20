import {
  AccordionPage,
  ButtonPage,
  HomePage,
  IconPage,
  ModalPage,
  SelectPage,
} from 'pages'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ROUTES } from 'routes'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.ACCORDION} element={<AccordionPage />} />
      <Route path={ROUTES.BUTTON} element={<ButtonPage />} />
      <Route path={ROUTES.ICON} element={<IconPage />} />
      <Route path={ROUTES.MODAL} element={<ModalPage />} />
      <Route path={ROUTES.SELECT} element={<SelectPage />} />
    </Routes>
  </BrowserRouter>
)
