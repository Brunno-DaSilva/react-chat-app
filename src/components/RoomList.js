import React from "react";

const Room = ({ room }) => {
  return (
    <li>
      <a className="a-text">{room.title}</a>
    </li>
  );
};

const RoomList = ({ rooms }) => {
  return (
    <aside className="menu">
      <h1 className="title is-4">Rooms:</h1>
      <ul className="menu-list">
        {Object.keys(rooms)
          .map((roomKey) => ({ ...rooms[roomKey], id: roomKey }))
          .map((roomObj) => (
            <Room key={roomObj.id} room={roomObj} />
          ))}
      </ul>
    </aside>
  );
};

export default RoomList;
