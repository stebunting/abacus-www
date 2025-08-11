import React from "react";
import { Outlet } from "react-router-dom";

import Header from "~/Components/Header";

interface Props {
  outlet?: React.ReactElement;
}

export default function Layout(props: Props): React.ReactElement {
  return (
    <>
      <Header />
      {props.outlet ?? <Outlet />}
    </>
  );
}
