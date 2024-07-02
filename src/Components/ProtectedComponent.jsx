// src/Components/ProtectedComponent.js
import React from 'react';
import { UseAuth } from './UseAuth';
import { Navigate } from 'react-router-dom';



const ProtectedComponent = ({ children }) => {
  const { user } = UseAuth();
    
  if (!user) {
    return <Navigate to="/Login" />;
  }

  return children;
};

export default ProtectedComponent;
