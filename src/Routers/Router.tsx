import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../Pages/App";
import Layout from "../Layout/Layout";
import Exercise from "../Pages/Exercise";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h3>Page not found</h3>,
    children: [
      { index: true, element: <App /> },
      {
        path: "/exercise",
        element: <Exercise />,
      },
    ],
  },
]);

const AppRouter = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default AppRouter;
