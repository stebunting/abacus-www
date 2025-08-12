import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "~/views/Layout";
import Main from "~/views/Main";
const Error = React.lazy(() => import("~/views/Error"));
const Contact = React.lazy(() => import("~/views/Contact"));
const Documentation = React.lazy(() => import("~/views/Documentation"));
const FAQ = React.lazy(() => import("~/views/FAQ"));
const Specs = React.lazy(() => import("~/views/Specs"));

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
      {
        path: "/specs",
        element: <Specs />,
      },
      {
        path: "/documentation",
        element: <Documentation />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/contact",
        element: <Contact />,
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
