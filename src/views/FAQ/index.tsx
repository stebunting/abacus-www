import React from "react";

import { useClassName } from "~/views/Layout";

export default function FAQ(): React.ReactElement {
  return (
    <div className={useClassName()}>
      <h1>FAQ</h1>
    </div>
  );
}
