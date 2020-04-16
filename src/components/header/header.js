import React from "react";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import { Link } from "react-router-dom";
import CardIcon from "../card-icon";
import CartDropDown from "../cart-dropdown";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selector";

import { ReactComponent as Logo } from "../assets/crown.svg";
import "./header.scss";

const Header = ({ currentUser, hidden }) => {
  const user = currentUser ? (
    <div className="option" onClick={() => auth.signOut()}>
      Sign Out
    </div>
  ) : (
    <Link className="option" to="/signin">
      Sign In
    </Link>
  );

  const Cart = hidden ? null : <CartDropDown />;

  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop/">
          Shop
        </Link>
        <Link className="option" to="/contact/">
          Contact
        </Link>
        {user}
        <CardIcon />
      </div>
      {Cart}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
