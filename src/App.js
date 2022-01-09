import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.components";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth,createUserProfileDocument} from "./firebase/firebase.utils";
import { doc, onSnapshot,getDoc } from "firebase/firestore";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null; //Prevent memory leaks
  unsubscribeFromSnapshot = null; //Prevent memory leaks

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef= await createUserProfileDocument(userAuth)
        this.unsubscribeFromSnapshot= onSnapshot(userRef,(snapshot)=>{
          this.setState({
            currentUser:{
              id:snapshot.id,
              ...snapshot.data()
            } 
          })
          console.log(this.state)
        });
      }
      else{
        this.setState({currentUser:userAuth})
      }
      //this.setState({ currentUser: user });
    // console.log(user.uid);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    this.unsubscribeFromSnapshot();
  }
  render() {
    const HatsPage = () => <div>Hats!</div>;
    const JacketsPage = () => <div>Jacket!</div>;
    const SneakersPage = () => <div>Sneakers!</div>;
    const WomensPage = () => <div>Womens!</div>;
    const MensPage = () => <div>Mens!</div>;
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/login" component={SignInSignUpPage} />
          <Route path="/shop/hats" component={HatsPage} />
          <Route path="/shop/jackets" component={JacketsPage} />
          <Route path="/shop/sneakers" component={SneakersPage} />
          <Route path="/shop/womens" component={WomensPage} />
          <Route path="/shop/mens" component={MensPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
