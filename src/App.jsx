import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { useDispatch } from 'react-redux';
import { useOnMountUnsafe } from '@/utils/unsafeHooks'
import { Base, Product } from '@/entities'
import ErrorPage from './pages/error-page'
import StorePage from './pages/store-page'
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
    Base.basicInfo().then(res => {
      console.log('Initial load:',res)
      dispatch(UIStore.actions.setSiteInfo(res))
    })
    Base.socialNetworks().then(res => {
      console.log('SNs load:',res)
      dispatch(UIStore.actions.setSocialNetworks(res?.items))
    })
    Product.findAll().then(res => {
      console.log('Products load:',res)
      dispatch(ProductStore.actions.setProducts(res))
    })
  }, [])

  return <RouterProvider router={router} />
}

export default App
