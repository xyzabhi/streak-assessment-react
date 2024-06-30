import React from "react";

const SingleSideBarMenu = ({ item }) => {
  return (
    <div key={item.name}>
      <span>Icon</span>
      <span>{item.name}</span>
    </div>
  );
};

function SideBar({ menus }) {
    console.log(menus);
  const renderMenus = menus.map((item) => <SingleSideBarMenu item={item}  key={item.name}/>);
  return <div>{renderMenus}</div>;
}

export default SideBar;
