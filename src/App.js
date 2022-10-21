import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Order from './components/Order/Order';
import PrivetRoutes from './components/Routes/PrivetRoutes';
import Shop from './components/Shop/Shop';
import SignUp from './components/SignUp/SignUp';
import Main from './Layout/Main';
import { loadProductAndCart } from './Loader/Loader';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: loadProductAndCart,
          element: <Shop></Shop>
        },
        {
          path: 'order',
          loader: loadProductAndCart,
          element: <PrivetRoutes><Order></Order></PrivetRoutes>
        },
        {
          path: 'inventory',
          element: <Inventory></Inventory>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
