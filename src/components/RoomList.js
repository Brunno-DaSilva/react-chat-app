import React from "react";
import AddRoom from "./AddRoom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faCommentDots } from "@fortawesome/free-solid-svg-icons";

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
      <h1 className="title is-5 title-text-blue">
        <FontAwesomeIcon icon={faCommentDots} /> Rooms
      </h1>
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
        <p className="title is-5 title-text-blue">
          <FontAwesomeIcon icon={faPlusCircle} /> Add a Room
        </p>
        <AddRoom addRoom={addRoom} />
      </div>
    </aside>
  );
};

const styleAddRoom = {
  marginTop: "3rem",
};
export default RoomList;
