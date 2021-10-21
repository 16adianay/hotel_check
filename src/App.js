import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import StartPage from "./components/start-page/StartPage";
import css from './App.module.css';

function App(){
  return(
      <Router>
        <div className={css.App}>
          <StartPage/>
        </div>
      </Router>
  );
}

export default App;
