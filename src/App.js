import React from "react";
//Pages
import SignInandSignUp from "./pages/sigin-signup/SignInandSignUp";
import HomePage from "./pages/homepage/HomePage";
import Shop from "./pages/shop/Shop";
import CheckoutPage from "./pages/checkout/CheckoutPage";

import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/selector/user.selectors";
import Header from "./components/header/Header";

import { auth, createUserProfileDoc } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/actions/user";

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);
        userRef.onSnapshot(snapshot =>
          this.props.setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        );
      } else {
        this.props.setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route
            exact
            path="/login"
            render={() =>
              this.props.user ? <Redirect to="/" /> : <SignInandSignUp />
            }
          />
          <Route
            exact
            path="/checkout"
            render={() =>
              this.props.user ? <CheckoutPage /> : <Redirect to="/login" />
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({ user: selectCurrentUser });
export default connect(
  mapStateToProps,
  { setCurrentUser }
)(App);
