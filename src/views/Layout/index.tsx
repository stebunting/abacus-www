import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";

import Footer from "~/Components/Footer";
import Header from "~/Components/Header";

import s from "./style.module.scss";

interface Props {
  outlet?: React.ReactElement;
}

type ContextType = string;

export default function Layout(props: Props): React.ReactElement {
  return (
    <div className={s.page}>
      <Header />
      <main>
        {props.outlet ?? <Outlet context={s.main satisfies ContextType} />}
      </main>
      <Footer />
    </div>
  );
}

export function useClassName(): string {
  return useOutletContext<ContextType>();
}
