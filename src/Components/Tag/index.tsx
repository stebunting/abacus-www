import React from "react";

import s from "./style.module.scss";

export default function Tag(): React.ReactElement {
  return (
    <hgroup className={s.tag}>
      <h1>ABACUS</h1>

      <p>THE PRECISION ENGINE FOR LIVE AUDIO</p>
    </hgroup>
  );
}
