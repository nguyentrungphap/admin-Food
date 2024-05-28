import React from "react";
import { Outlet } from "react-router-dom";

function EmptyLayoutAdmin() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default EmptyLayoutAdmin;
