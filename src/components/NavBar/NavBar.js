import React from "react";

import NavBarItem from "./NavBarItem";

const NavBar = () => {
  const navigations = [
    {
      id: 1,
      title: "Tic-Tac-Toe",
    },
    {
      id: 2,
      title: "Calculator",
    },
  ];

  return (
    <div>
      {navigations.map((nav) => {
        return <NavBarItem id={nav.id} title={nav.title} />;
      })}
    </div>
  );
};

export default NavBar;
