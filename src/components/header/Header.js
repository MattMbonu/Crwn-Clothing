import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

const Header = ({ user }) => {
  return (
    <header className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>

        <Link className="option" to="/contact">
          Contact
        </Link>
        {user ? (
          <div onClick={() => auth.signOut()} className="option" to="/login">
            Log Out
          </div>
        ) : (
          <Link className="option" to="/login">
            Sign In
          </Link>
        )}
      </div>
    </header>
  );
};
const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps)(Header);
