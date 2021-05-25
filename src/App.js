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
import CheckOut from './components/Privates/CheckOut/CheckOut';
import ConfirmationBox from './components/Privates/ConfirmationBox/ConfirmationBox';
import UserDashboard from './components/User/UserDasboard/UserDashboard';
import Login from './components/Privates/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

//creating context API for Users
export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route path="/home">
            <Home></Home>
        </Route>
        <Route exact path="/">
            <Home></Home>
        </Route>
        <Route path='/login'>
            <Login></Login>
          </Route>
        <PrivateRoute path="/admin">
            <Admin></Admin>
        </PrivateRoute>
        <PrivateRoute path="/user">
            <UserDashboard></UserDashboard>
        </PrivateRoute>
        <PrivateRoute path="/checkout/:serviceID">
           <CheckOut></CheckOut>
        </PrivateRoute>
        <PrivateRoute path="/confirm">
           <ConfirmationBox></ConfirmationBox>
        </PrivateRoute>
        <Route path="*">
            <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
