import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactDOM from 'react-dom'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import ProductAndServices from './components/ProductAndServices/ProductAndServices'
import SocialImpact from './components/SocialImpact/SocialImpact'
import NewsAndEvents from './components/NewsAndEvents/NewsAndEvents'
import GetInTouch from './components/GetInTouch/GetInTouch'
import Intern from './components/Intern/Intern'
// method 1 to create router
// const router=createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'productandservices',
//         element: <ProductAndServices />
//       },
//       {
//         path: 'socialimpact',
//         element: <SocialImpact />
//       },
//       {
//         path: 'newsandevents',
//         element: <NewsAndEvents />
//       },
//       {
//         path: 'getintouch',
//         element: <GetInTouch />
//       }
//     ]
//   }
// ])

// method 2 to create router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="productandservices" element={<ProductAndServices />} />
      <Route path="socialimpact" element={<SocialImpact />} />
      <Route path="newsandevents" element={<NewsAndEvents />} />
      <Route path="getintouch" element={<GetInTouch />} />
      <Route path="intern/:internid" element={<Intern />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
