import { slide as Menu } from "react-burger-menu";
import React from "react";
import { supabase } from "../lib/supabaseClient";
import "../style/Navigation.css";
import { Link } from "react-router-dom";
import { LoginFunction } from "./LoginFunction.js";
import { MenuCategory } from "./MenuCategory";

export class Hamburger extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }
  constructor(props) {
    super(props);
    this.state = {
      modal: null,
      show: false,
    };

    this.logOut = this.logOut.bind(this);
  }
  showMore() {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
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
    return (
      <div className="hamburgerMenu">
        <Menu right>
          <Link to="/">Naslovnica</Link>
          <Link to="/onama">O nama</Link>
          <Link to="/novaObjava">Nova Objava</Link>
          <Link to="/" onClick={() => this.showMore()}>
            Kategorije
          </Link>
          {this.state.show && <MenuCategory />}
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
