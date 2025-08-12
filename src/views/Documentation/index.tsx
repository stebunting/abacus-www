import React from "react";

import { useClassName } from "~/views/Layout";

import s from "./style.module.scss";

export default function Documentation(): React.ReactElement {
  return (
    <div className={useClassName()}>
      <h1>Documentation</h1>

      <ul>
        <li>
          <button className={s.button}>
            <a
              href="https://intercom.help/audiostrom/en"
              target="_blank"
              rel="external"
            >
              Audioström Live Professor
            </a>
          </button>
        </li>
        <li>
          <button className={s.button}>
            <a
              href="https://www.waves.com/mixers-racks/superrack#tab-support"
              target="_blank"
              rel="external"
            >
              Waves SuperRack
            </a>
          </button>
        </li>
      </ul>
    </div>
  );
}
