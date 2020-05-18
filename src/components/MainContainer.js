import React from "react";

const MainContainer = ({ children }) => {
  return (
    <div className="column hero">
      <div className="hero-body">
        <div className="columns is-centered">
          <div className="column">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
