import React from "react";
import "./App.css";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "./redux/user/user.selectors";

import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop-page.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import CheckoutPage from "./pages/checkout/checkout.component";

import { setCurrentUser } from "./redux/user/user.action";
// export const HatsPage = () => (
//   <div>
//     <h1> Hats Page</h1>
//   </div>
// );
// export const JacketsPage = () => (
//   <div>
//     <h1> Jackets Page</h1>
//   </div>
// );
// export const SneakersPage = () => (
//   <div>
//     <h1> Sneakers Page</h1>
//   </div>
// );
// export const WomensPage = () => (
//   <div>
//     <h1> Womens Page</h1>
//   </div>
// );
// export const MensPage = () => (
//   <div>
//     <h1> Mens Page</h1>
//   </div>
// );

class App extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     currentUser: null,
  //   };
  // }

  // unsubscribeFromAuth = null;

  // componentDidMount() {
  //   this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
  //     if (userAuth) {
  //       const userRef = await createUserProfileDocument(userAuth);
  //       userRef.onSnapshot((snapshot) => {
  //         // snapshot nous renvois le document snapshot sans la data nous devons appeler la methode .data() pour recevoir la data sous forme d un objet json
  //         this.setState(
  //           {
  //             currentUser: {
  //               id: snapshot.id,
  //               ...snapshot.data(),
  //             },
  //           }
  //           // ,
  //           // () => {
  //           //   console.log(this.state);
  //           // }
  //         );
  //       });
  //     }
  //     this.setState({ currentUser: userAuth });
  //   });
  // }

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          // snapshot nous renvois le document snapshot sans la data nous devons appeler la methode .data() pour recevoir la data sous forme d un objet json
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    // console.log("get in");
    this.unsubscribeFromAuth();
    // console.log("closed", this.state.currentUser);
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
      // <Route exact path="/shop/hats" component={HatsPage} />
      // <Route exact path="/shop/jackets" component={JacketsPage} />
      // <Route exact path="/shop/sneakers" component={SneakersPage} />
      // <Route exact path="/shop/womens" component={WomensPage} />
      // <Route exact path="/shop/mens" component={MensPage} />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

// the reducer is the acutual value of the state in the store  and reucer functions are the ones that modify the state for that specific reducer

const mappDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

// this is to add the Reducer action to the component so you can call that function and update de database (reducer)

export default connect(mapStateToProps, mappDispatchToProps)(App);
