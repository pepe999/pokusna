import React, { Component } from 'react';
import './App.css';
// import logo from './logo.svg';


// import  { ShoppingList }  from './components/ShoppingList'

import  { Toast }  from './containers/Toast'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import  { Game }  from './containers/Game'

import  { Navigace }  from './containers/Navigace'

import  { ReactRedux }  from './containers/ReactRedux'





class App extends Component {
  render() {
    return (
      <div>
          {/* ------------------------------------------------------- */}
          
          {/* jednoduchá react komponenta */}
          {/* <ShoppingList name="Mark" /> */}

          {/* ------------------------------------------------------- */}

          <ToastContainer />
          <Toast />

          {/* ------------------------------------------------------- */}

          {/* složitější komponenta */}
          <Game />

          {/* ------------------------------------------------------- */}

          {/* navigace - "react-router-dom" */}
          <Navigace />

          {/* ------------------------------------------------------- */}

          <ReactRedux />

      </div>
    );
  }
}

export default App;
