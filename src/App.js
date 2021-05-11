import logo from './logo.svg';
import './App.css';
import './utilities.css'
import Navigation from './components/Home/Navigation/Navigation';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Admin from './components/Admin/Admin/Admin';
import NotFound from './components/Shared/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
            <Home></Home>
        </Route>
        <Route exact path="/">
            <Home></Home>
        </Route>
        <Route path="/admin">
            <Admin></Admin>
        </Route>
        <Route path="*">
            <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
