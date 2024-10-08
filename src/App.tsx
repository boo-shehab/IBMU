
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import AboutUsPage from './pages/AboutUsPage'
import pdf from './assets/pdf/book.pdf'
import PdfLayout from './layouts/PdfLayout'
import { Path } from '@react-pdf/renderer'
import ContactUs from './pages/ContactUs'

const routesConfig = [
  {
    path: "/pdf-viewer",
    element: <PdfLayout pdf={pdf} />,
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],

  }
]
const router = createBrowserRouter(routesConfig);

const App = () => {
  return <RouterProvider router={router} />
}

export default App
