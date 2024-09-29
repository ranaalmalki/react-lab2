import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
]);



function Router() {
  return (
    <div>
<RouterProvider router={router}/>

    </div>
  )
}


export default Router