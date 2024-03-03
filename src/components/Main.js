import React from "react";
import NavBar from "./NavBar/NavBar";
import MainSection from "./MainSection/MainSection";

const Main = () => {
  return (
    <div className="flex flex-col gap-2 h-screen w-screen">
      {/* <div className="h-32 bg-red-400"></div>
      <div className="grow h-32 bg-blue-600"></div> */}
      <NavBar />
      <MainSection />
    </div>
  );
};

export default Main;
