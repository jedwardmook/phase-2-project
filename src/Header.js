import React from "react";
import { NavLink } from "react-router-dom";

function Header() {

    const linkStyles = {
        display: "inline-block",
        width: "85px",
        padding: "6px",
        margin: "3px",
        background: "dodgerblue",
        textDecoration: "none",
        color: "white",
        textAlign: "center",
        borderRadius: "5px"
      };

    return (
        <div>
          <h1>Spot Check-Chicago</h1>
          <NavLink
            to="/"
            exact
            style={linkStyles}
            activeStyle={{
              background: "darkblue",
            }}
          >
            <strong>Home</strong>
          </NavLink>
          <NavLink
            to="/addspot"
            exact
            style={linkStyles}
            activeStyle={{
              background: "darkblue",
            }}
          >
            <strong>Add Spot</strong>
          </NavLink>
        </div>
      );

}

export default Header;