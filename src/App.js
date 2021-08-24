import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import About from './components/Pages/About/About';
import Home from './components/Pages/Homepage/Home';
import Portfolio from './components/Pages/Portfolio/Portfolio';
import Contact from './components/Pages/Contact/Contact';

function App() {
  return (
    <>
          <BrowserRouter>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/#about" component={About} />
              <Route path="/#portfolio" component={Portfolio} />
              <Route path="/#contact" component={Contact} />
            </Switch>
          </BrowserRouter>
    </>
  );
}

export default App;
