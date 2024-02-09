import {
    Outlet,
  } from "react-router-dom";
  import SideBar from "../components/SideBar"
  export default function Root() {

    return (
      <>
        <SideBar/>
        <Outlet />
      </>
    );
  }
  