import React, { useState } from "react";
import styles from "./sidebar.module.css";
const SingleSideBarMenu = ({ item }) => {
  return (
    <div key={item.name} className={styles.singleMenuItem}>
      <div>{item.name}</div>
    </div>
  );
};

function SideBar({ menus }) {
  const [isOpen, setIsOpen] = useState(true);
  const handleSideBar = () => {
    setIsOpen(!isOpen);
  };
  const renderMenus = menus.map((item) => (
    <SingleSideBarMenu item={item} key={item.name} />
  ));
  return isOpen ? (
    <div className={styles.sidebar}>
      <div className={styles.sideBarTitle}>
        <div>Google Analytics</div>
        <div className={styles.sideBarCloseIcon} onClick={handleSideBar}>
          ✕
        </div>
      </div>
      {renderMenus}
    </div>
  ) : (
    <div onClick={handleSideBar} className={styles.sideBarOpenIcon}>
      ≣
    </div>
  );
}

export default SideBar;
