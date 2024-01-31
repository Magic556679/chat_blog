import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '@/pages/home/Index'
import NotFound from '@/pages/home/NotFound'
import Edit from '@/pages/post/Edit'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/edit/:id', element: <Edit /> },
  {
    path: '*',
    element: <NotFound />
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
