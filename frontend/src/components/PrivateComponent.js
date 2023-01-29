import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// const PrivateComponent=()=>{
//     const auth=localStorage.getItem('user');
//     // return auth ? <Outlet /> : <Navigate to="/signup" />
//     return <Outlet/>
// }

// export default PrivateComponent;

export default function PrivateComponent() {
  const auth = localStorage.getItem("user");
  return auth ? <Outlet /> : <Navigate to="/signup" />;
}
