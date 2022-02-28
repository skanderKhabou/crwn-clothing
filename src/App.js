import React from "react";
import "./App.css";

import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop-page.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
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
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          // snapshot nous renvois le document snapshot sans la data nous devons appeler la methode .data() pour recevoir la data sous forme d un objet json
          this.setState(
            {
              currentUser: {
                id: snapshot.id,
                ...snapshot.data(),
              },
            }
            // ,
            // () => {
            //   console.log(this.state);
            // }
          );
        });
      }
      this.setState({ currentUser: userAuth });
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
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
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

export default App;
