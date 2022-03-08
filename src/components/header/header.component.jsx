import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import "./header.styles.scss";

import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        {" "}
        SHOP{" "}
      </Link>
      <Link className="option" to="/shop">
        {" "}
        CONTACT{" "}
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

// sans le createStructurSelector
// const mapStateToProps = (state) => ({
//   // currentUser: state.user.currentUser,
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state),
//   // Pour eviter la redondance on et appeler chaque selector a son tour on utilise la methode si dessous importer de la librrrary reselect createStructuredSelector
// });

// Pour eviter la redondance on et appeler chaque selector a son tour on utilise la methode si dessous importer de la librrrary reselect createStructuredSelector
const mapStateToProps = createStructuredSelector({
  // currentUser: state.user.currentUser,
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
// this will give us the current value of current user that we initiate it into the store so no user is null as we set it by default
export default connect(mapStateToProps)(Header);
