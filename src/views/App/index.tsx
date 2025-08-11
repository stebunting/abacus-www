import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "~/views/Main";
import Layout from "~/views/Layout";
const Error = React.lazy(() => import("~/views/Error"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <Suspense>
        <Layout outlet={<Error />} />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <Main />,
      },
    ],
  },
]);

export default function App(): React.ReactElement {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
