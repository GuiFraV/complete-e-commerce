import { createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element: <span>Home</span>
  },
  {
    path:"/products/:id",
    element: <span>Category</span>
  },
  {
    path:"/product/:id",
    element: <span>Product</span>
  },
])

function App(){
  return (
    <h1>
      <RouterProvider router={router} />
    </h1>
  )
}

export default App;