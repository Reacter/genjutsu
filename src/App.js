import React from 'react';
import './App.css';
import FormStyled from './Components/Form/Form'
import Navigation from './Components/Navigation/Navigation';
import {BrowserRouter as Router,Route,Switch,} from 'react-router-dom'
import Home from './Components/Home'
import Quiz from './Quiz/Quiz'
import styled from 'styled-components'
import Result from './Components/Result/Result'

const MainWrapper = styled.div`
    background-color:#3e2d52;
    height:900px;

`

function App() {
  return (
    <Router>
    <MainWrapper>
    <div className="App">
        <Navigation/>
        <Switch>
          <Route path="/startquiz" component={FormStyled}/>
          <Route path="/" exact component={Home} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/result" component={Result} />
        </Switch>
    </div>
    </MainWrapper>
    </Router>
  );
}

export default App;
