import React from "react";
import RoomList from "./RoomList";

const SideBar = ({ logout, rooms }) => {
  return (
    <div className="column is-3 hero is-primary nav-padding ">
      <h1>Side Bar</h1>
      <RoomList rooms={rooms} />
      <div className="control">
        <button onClick={logout} className="button is-fullwidth">
          Logout
        </button>
      </div>
    </div>
  );
};

export default SideBar;
