import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="relative w-full flex items-center justify-between py-4 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
        <div className="container-fluid w-full flex items-center justify-between px-6">
          <div className="container-fluid">
            <Link
              className="flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0 mr-1"
              to="/"
            >
              <img
                className="mr-2"
                src="https://www.mim-essay.com/images/header/our-services/consultant.png"
                style={{ height: "50px" }}
                alt=""
                loading="lazy"
              />
            </Link>
          </div>
          <button onClick={() => navigate("universities/add")}>
            ADD NEW UNIVIRSITY
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
