import React, {useState} from 'react';
import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SigninPage from './pages/signin';
import Navbar from './components/Navbar';
import About from './pages/About';
import Sidebar from './components/Sidebar';
import Buy from './pages/Buy'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error';
import SignUpPage from './pages/SignUp';
// import SigninPage from './pages/signin';




function App() {
  const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Switch>
        <Route path="/"  exact component={Home} />
        <Route path="/about" component={About} exact />
        <Route path="/buy" component={Buy} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/signup" component={SignUpPage} exact />
        <Route path="/cocktail/:id" component={SingleCocktail} exact />
        <Route path="*" component={Error} exact />
      </Switch>
      
    </Router>
  );
}

export default App;
