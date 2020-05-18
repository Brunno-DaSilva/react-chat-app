import React, { Component } from "react";

class AddRoom extends Component {
  state = {
    rooName: "",
  };

  handleAddRoom = (e) => {
    e.preventDefault();
    this.props.addRoom(this.state.rooName);
    this.setState({
      rooName: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddRoom}>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Room name"
              onChange={(e) => this.setState({ rooName: e.target.value })}
              value={this.state.roomName}
            />
            <button className="button" type="submit">
              Add Room
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddRoom;
