import React from "react";
import { Outlet } from "react-router-dom";
import Selector from "../components/Selector";

const Home = () => {
  return (
    <section>
      <div className="flex justify-center	m-20">
        <Selector />
      </div>
      <div className="flex flex-wrap justify-center m-20">
        <Outlet />
      </div>
    </section>
  );
};

export default Home;
