import React from "react";

import { useClassName } from "~/views/Layout";

import server from "./server.png";
import s from "./style.module.scss";

export default function Main(): React.ReactElement {
  return (
    <div className={`${useClassName()} ${s.container}`}>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdcL3HhPl57QsYt4EnhRaNT28oMUdWIsWe5lyo0D9LOkBar0A/viewform?usp=dialog"
        target="_blank"
        rel="external"
      >
        <button className={s.register}>Register your interest</button>
      </a>
      <img className={s.server} src={server} alt="Server" />
    </div>
  );
}
