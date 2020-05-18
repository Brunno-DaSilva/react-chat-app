import React from "react";
import AddRoom from "./AddRoom";

const Room = ({ room, selectedRoom, setRoom }) => {
  const styles = selectedRoom === room.id ? "isActiveRoom" : "a-text";

  return (
    <li>
      <a className={styles} onClick={() => setRoom(room.id)}>
        {room.name}
      </a>
    </li>
  );
};

const RoomList = ({ rooms, selectedRoom, setRoom, addRoom }) => {
  return (
    <aside className="menu">
      <h1 className="title is-4">Rooms:</h1>
      <ul className="menu-list">
        {Object.keys(rooms)
          .map((roomKey) => ({ ...rooms[roomKey], id: roomKey }))
          .map((roomObj) => (
            <Room
              key={roomObj.id}
              room={roomObj}
              selectedRoom={selectedRoom}
              setRoom={setRoom}
            />
          ))}
      </ul>

      <div style={styleAddRoom}>
        <p className="menu-label has-text-white is-size-5">Add a Room</p>
        <AddRoom addRoom={addRoom} />
      </div>
    </aside>
  );
};

const styleAddRoom = {
  marginTop: "3rem",
};
export default RoomList;
