import Home from '@/pages/home/Index'
import Edit from '@/pages/post/Edit'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/edit/:id', element: <Edit /> }
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
