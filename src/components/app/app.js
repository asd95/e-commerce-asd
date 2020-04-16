import React, { Component } from "react";
import Header from "../header";
import HomePage from "../pages/home-page";
import ShopPage from "../pages/shop-page";
import SignInSignUp from "../pages/sign-in-and-sign-up";
import { auth, createUserProfileDoc } from "../../firebase/firebase.utils";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import { setCurrentUser } from "../../redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import CheckoutPage from "../checkout";

import "./app.scss";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else this.props.setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route
            path="/signin"
            render={() => {
              return currentUser ? <Redirect to="/" /> : <SignInSignUp />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
