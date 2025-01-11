import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const user = useSelector(state => state.user);

  // Redirect to the home page if the user is not authenticated
  if (user === null) {
    return <Navigate to="/" />;
  }

  // Render the child components if the user is authenticated
  return children;
};

export default PrivateRoute;
