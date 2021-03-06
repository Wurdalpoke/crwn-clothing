import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Routes, Route, Navigate } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import CategoryPage from './pages/collection/collection.component';

import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';


class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } 
      
      setCurrentUser(userAuth);  
    })
  }

  componentWillUnmount() {
    this.unsubscribFromAuth();
  }
  
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path='' element={<HomePage/>} />
          <Route path='shop/*' element={<ShopPage/>}/>
          <Route path='checkout' element={<CheckoutPage/>} />
          <Route  
            path='signin'
            element={this.props.currentUser ? (<Navigate replace to='/' />) : (<SignInAndSignUpPage/>)} 
          />
        </Routes>
      </div>
    );
  } 
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
