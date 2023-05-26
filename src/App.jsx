// import { useState } from 'react'
// import viteLogo from '/vite.svg'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import ErrorPage from './pages/error-page'
import StorePage from './pages/store-page'

const router = createBrowserRouter([
  {
    path: "/",
    // element: <img src={building} alt="React logo" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "store",
    element: <StorePage />,
  },
]);

function App() {
  // const [count, setCount] = useState(0)

  return <RouterProvider router={router} />
}

export default App
