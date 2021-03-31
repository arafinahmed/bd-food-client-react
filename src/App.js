
import { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Head from './components/Head/Head';
import NotFound from './components/NotFound/NotFound';
import LoginPage from './components/LoginPage/LoginPage';
import Admin from './components/Admin/Admin';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
export const ContextApi = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (
    <ContextApi.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        
        <Head></Head>
        
        <Switch>
          <Route path="/login">
            <LoginPage></LoginPage>
          </Route>
          
          <PrivateRoute path="/admin">
          <Admin></Admin>
          </PrivateRoute>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
    </ContextApi.Provider>
  );
}

export default App;
