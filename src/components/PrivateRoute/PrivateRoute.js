import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { ContextApi } from '../../App';

function PrivateRoute({ children, ...rest }) {
    const loggedInUser = useContext(ContextApi)[2];
    return (
      <Route
        {...rest}
        render={({ location }) =>
          loggedInUser.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

export default PrivateRoute;