import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import store from './store'; 
import Listing from './components/Listings';
import LoggedInListings from './components/LoginScreen';
import Details from './components/Details';
import Login from './components/Login';
import AddListingPage from './components/addListings';

const App = () => {
  const user = { username: 'username' };

  
  const isAuthenticated = () => {

    return !!user;
  };

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Listing} />
            <Route path="/details/:id" component={Details} />
            <Route path="/login" component={Login} />
            
            
            <PrivateRoute
              path="/loggedinlistings"
              component={LoggedInListings}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              path="/addlisting"
              component={AddListingPage}
              isAuthenticated={isAuthenticated}
            />
            
            
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};


const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default App;
