import React from "react";
import { Link } from "react-router-dom";

import s from "./style.module.scss";

export default function Header(): React.ReactElement {
  return (
    <header>
      <div className={s.logo}>ABACUS</div>

      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/specs">Specs</Link>
        </li>
        <li>
          <Link to="/documentation">Documentation</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </nav>
    </header>
  );
}
