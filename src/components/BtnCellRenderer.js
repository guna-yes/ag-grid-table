import React, { Component } from "react";

 class DeleteButton extends Component {
  render() {
    return (
      <span>
        <button onClick={() => this.buttonClick(this.props.node)}>
          <img
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/delete-1432400-1211078.png"
            style={{ height: "25px", width: "25px" }}
          ></img>
        </button>
      </span>
    );
  }
}
