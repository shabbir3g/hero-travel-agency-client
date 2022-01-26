import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import { Spinner } from 'react-bootstrap';

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, isLoading } = useAuth();
  let location = useLocation();

  if (isLoading) {
    return <Spinner animation="border" />;
  }

  if (user.email && admin) {
    return children;
  }
  return <Navigate to="" state={{ from: location }} />;
};

export default AdminRoute;