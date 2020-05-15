import React from "react";

const Room = (props) => {
  return <li>{props.room.title}</li>;
};

const RoomList = (props) => {
  const RoomComponents = Object.keys(props.rooms)
    .map((roomKey) => {
      return {
        ...props.rooms[roomKey],
        id: roomKey,
      };
    })
    .map((roomObj) => <Room key={roomObj.id} room={roomObj} />);

  return <ul>{RoomComponents}</ul>;
};
const SideBar = ({ logout, rooms }) => {
  return (
    <div className="column is-3 hero is-primary">
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
