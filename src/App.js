import React from 'react';
import './App.css';
import FormStyled from './Components/Form/Form'
import Navigation from './Components/Navigation/Navigation';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import Home from './Components/Home'
import Quiz from './Components/Quiz/Quiz'
import styled from 'styled-components'
import Result from './Components/Result/Result'
import { Provider } from 'react-redux'
import store from './redux/store'
import SignIn from './Components/Auth/SignIn'
import SignOut from './Components/Auth/SignOut'
import SignUp from './Components/Auth/SignUp'
import User from './redux/user/User'
import firebase from './Firebase'
import { createFirestoreInstance } from 'redux-firestore'
import { getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase'

const MainWrapper = styled.div`
    background-color:#3e2d52;
    height:900px;

`

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance
}


function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>
          <MainWrapper>
            <div className="App">
              <Navigation />
              <Switch>
                <Route path="/startquiz" component={FormStyled} />
                <Route path="/" exact component={Home} />
                <Route path="/quiz" component={Quiz} />
                <Route path="/result" component={Result} />
                <Route path='/signup' component={SignUp}/>
                <Route path='/signin' component={SignIn}/>
              </Switch>
            </div>
          </MainWrapper>
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;

