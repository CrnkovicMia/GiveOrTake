import { slide as Menu } from "react-burger-menu";
import React from "react";
import { supabase } from "../lib/supabaseClient";
import "../style/Navigation.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { LoginFunction } from "./LoginFunction.js";

export class Hamburger extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }
  constructor(props) {
    super(props);
    this.state = {
      modal: null,
    };
    this.logOut = this.logOut.bind(this);
  }

  setModal() {
    const [modal, setModal] = LoginFunction();
    this.setState({ modal });
  }

  async logOut() {
    await supabase.auth.signOut();
    this.setModal();
  }
  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <div className="hamburgerMenu">
        <Menu right>
          <Link to="/">Naslovnica</Link>
          <Link to="/onama">O nama</Link>
          <Link to="/novaObjava">Nova Objava</Link>
          <Link to="/">Kategorije</Link>
          {!this.props.user ? (
            <Link to="/login">Login</Link>
          ) : (
            <Link to="/profil">Profil</Link>
          )}
          {this.props.user && (
            <Link to="/" onClick={this.logOut}>
              Logout
            </Link>
          )}
        </Menu>
      </div>
    );
  }
}
