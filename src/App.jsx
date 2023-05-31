import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { useDispatch } from 'react-redux';
import { useOnMountUnsafe } from '@/utils/unsafeHooks'
import { Base, Product } from '@/entities'
import ErrorPage from './pages/errorPage'
import StorePage from './pages/storePage'
import UIStore from '@/redux/ui'
import ProductStore from '@/redux/product'

const router = createBrowserRouter([
  {
    path: "/",
    element: <StorePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "store",
    element: <StorePage />,
  },
]);

function App() {
  const dispatch = useDispatch()

  useOnMountUnsafe(() => {
    Base.basicInfo().then(res => dispatch(UIStore.actions.setSiteInfo(res)))
    Base.socialNetworks().then(res => dispatch(UIStore.actions.setSocialNetworks(res?.items)))
  }, [])

  return <RouterProvider router={router} />
}

export default App
