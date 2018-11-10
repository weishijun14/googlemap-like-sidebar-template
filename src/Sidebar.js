import React from "react";

import "./Sidebar.css";

class Sidebar extends React.PureComponent {
  state = {
    expand: false
  };
  expand = () => {
    const { expand } = this.state;
    this.setState({
      expand: !expand
    });
  };

  render() {
    const { expand } = this.state;
    return (
      <div
        className="wrapper"
        style={{
          background: `${expand ? "#f5f5f5" : "transparent"}`,
          boxShadow: `${
            expand ? "9px 12px 15px 0px rgba(0, 0, 0, 0.75)" : "none"
          }`
        }}
      >
        <div className="searchContainer">
          <div className="searchBox">
            <input type="text" />
          </div>
        </div>
        <div className="contentContainer">
          <div
            className="content"
            style={{ height: `${expand ? "calc(100vh - 100px)" : 0}` }}
          />
          <div className="expandbutton" onClick={this.expand}>
            expandbutton
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
