
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import AboutUsPage from './pages/AboutUsPage'
import ContactUs from './pages/ContactUs'
import NewsPage from './pages/NewsPage'
import EventsPage from './pages/EventsPage'
import NewsDetailPage from './pages/NewsDetailPage'

const routesConfig = [
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
        path: "/news-events/news",
        element: <NewsPage />
      },
      {
        path: "/news-events/news/:id",
        element: <NewsDetailPage />
      },
      {
        path: '/news-events/events',
        element: <EventsPage />
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
