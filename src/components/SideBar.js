import React from "react";
import RoomList from "./RoomList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
const SideBar = ({ logout, rooms, selectedRoom, setRoom, addRoom }) => {
  return (
    <div className="column is-3 hero" id="nav-bar">
      <div className="">
        <h1 className="title taga-logo is-fullwidth">
          Tagarela
          <span className="taga-icon-logo">
            <FontAwesomeIcon icon={faComments} />
          </span>
        </h1>
      </div>
      <RoomList
        rooms={rooms}
        selectedRoom={selectedRoom}
        setRoom={setRoom}
        addRoom={addRoom}
      />
      <div className="control">
        <button onClick={logout} className="button is-fullwidth button-blue">
          Logout
        </button>
      </div>
    </div>
  );
};

export default SideBar;
