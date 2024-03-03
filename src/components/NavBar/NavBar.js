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
    <div className="flex flex-row mx-2 mt-2 mb-1 py-2 rounded-xl items-center justify-center bg-gray-500">
      {navigations.map((nav) => {
        return <NavBarItem key={nav.id} title={nav.title} />;
      })}
    </div>
  );
};

export default NavBar;
