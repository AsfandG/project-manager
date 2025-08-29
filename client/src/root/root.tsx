import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <nav>navigation</nav>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
