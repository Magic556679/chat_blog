import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '@/pages/home/Index'
import LoginIndex from '@/pages/login/Index'
import Login from '@/pages/login/Login'
import Register from '@/pages/login/Register'
import NotFound from '@/pages/home/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: '/login',
    element: <LoginIndex />,
    children: [
      {
        path: '',
        element: <Login />
      }
    ]
  },
  {
    path: '/register',
    element: <LoginIndex />,
    children: [
      {
        path: '',
        element: <Register />
      }
    ]
  }
])

function App() {
  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
