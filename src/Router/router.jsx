import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Main />,
      errorElement: <h3>This is error page </h3>,
      children: [{ path: "/", element: <h3>Hahaha</h3> }],
   },
]);
