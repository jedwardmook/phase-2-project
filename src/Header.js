import React from "react";
import { NavLink } from "react-router-dom";
import Spot_Check from "./images/spot_check.png";

function Header() {

    const linkStyles = {
        display: "block",
        width: "87px",
        height: "39px",
        padding: "6px",
        marginTop: "9px",
        marginBottom: "-4px",
        background: "white",
        textDecoration: "none",
        color: "#005A9C",
        textAlign: "center",
        borderRadius: "5px",
        border: "1px solid #005A9C",
      };

    return (
        <div id="header">
            <img id="header_logo" src={Spot_Check} alt="Spot Check" />
            <h1 id="header_solid"><strong>Spot Check</strong></h1><h1 id="header_outline">Chicago</h1>
            <div id="nav">
                <NavLink
                    id="home"
                    to="/"
                    exact
                    style={linkStyles}
                    activeStyle={{
                    background: "#005A9C",
                    color: "white",
                    }}
                >
                <strong>Home</strong>
                </NavLink>
                <NavLink
                    id="add"
                    to="/addspot"
                    exact
                    style={linkStyles}
                    activeStyle={{
                    background: "#005A9C",
                    color: "white",
                    }}
                >
                <strong>Add Spot</strong>
                </NavLink>
            </div>
        </div>
      );

}

export default Header;