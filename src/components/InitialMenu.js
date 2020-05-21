import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

const InitialMenu = () => {
  return (
    <>
      <nav className="navbar taga-logo" role="navigation">
        <div className="navbar-brand">
          <a class="navbar-item title " href="#">
            <h1 className="taga-logo">
              Tagarela
              <span className="taga-icon-logo">
                <FontAwesomeIcon icon={faComments} />
              </span>
            </h1>
          </a>

          <a
            role="button"
            className="navbar-burger burger taga-logo"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default InitialMenu;
