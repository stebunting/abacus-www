import React from "react";

import { useClassName } from "~/views/Layout";

export default function Contact(): React.ReactElement {
  return (
    <div className={useClassName()}>
      <h1>Contact</h1>
    </div>
  );
}
