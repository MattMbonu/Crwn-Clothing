import React from "react";
import HomePage from "./pages/homepage/HomePage";
import Shop from "./pages/shop/Shop";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import SignInandSignUp from "./pages/sigin-signup/SignInandSignUp";
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
          <Route path="/login" component={SignInandSignUp} />
        </Switch>
      </div>
    );
  }
}

export default connect(
  null,
  { setCurrentUser }
)(App);
