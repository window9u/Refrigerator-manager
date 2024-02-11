import {
    Outlet,
  } from "react-router-dom";
  import SideBar from "../components/SideBar"
  export default function Root() {

    return (
      <div class="columns ">
        <div class="column is-3">
        <SideBar/>
        </div>
        <div class="column is-9">
        <Outlet />

        </div>
      </div>
    );
  }
  