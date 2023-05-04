import { slide as Menu } from "react-burger-menu";
import React from "react";
import "../style/Navigation.css";
import { Link } from "react-router-dom";

export class Hamburger extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <div className="hamburgerMenu">
        <Menu right>
          <Link to="/">Naslovnica</Link>
          <Link to="/onama">O nama</Link>
          <Link to="/novaObjava">Nova Objava</Link>
          <Link to="/login">Login</Link>
          {/* <a id="contact" className="menu-item" href="/contact">Login</a>
            <a onClick={ this.showSettings } className="menu-item--small" to="/novaObjava">Nova Objava</a>*/}
        </Menu>
      </div>
    );
  }
}
