import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink, Route, HashRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeContainer from "./containers/Home";
import AboutContainer from './containers/About'

const Portfolio = () => (
    <HashRouter>
        <Route path='/' component={AboutContainer}/>
        <Route path='/about' component={HomeContainer} />
    </HashRouter>
)

ReactDOM.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
