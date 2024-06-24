// ProtectedRoute.jsx
import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import useAuth from '../../context/AuthContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const navigate = useNavigate()
    const { authStatus } = useAuth();

    return (
        <Route 
            {...rest} 
            render={(props) => {
                return authStatus ? <Component {...props} /> : navigate('/loginSignup')
            }} 
        />
    );
};

export default ProtectedRoute;
