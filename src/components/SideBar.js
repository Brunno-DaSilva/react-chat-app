import React from "react";

const SideBar = ({ logout }) => {
  return (
    <div className="column is-3 hero is-primary">
      <h1>Side Bar</h1>
      <div className="control">
        <button onClick={logout} className="button is-fullwidth">
          Logout
        </button>
      </div>
    </div>
  );
};

export default SideBar;
