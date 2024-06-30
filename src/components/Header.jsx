import React from "react";
import logo from "../product-logo.png"
import styles from "./header.module.css"
import { headerMenu } from "../utils/constants";
function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.productTitle}>
        <img
          alt="google analytics"
          src={logo}
          width={75}
          height={30}
        />
      </div>
      <div className={styles.menu}>
        {
            headerMenu.map(item=><span className={styles.singlemenuitem}>{item}</span>)
        }
      </div>
    </div>
  );
}

export default Header;
