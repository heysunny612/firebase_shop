import React from 'react';
import { useUserContext } from '../context/UserContext';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, requireAdmin }) {
  const { user } = useUserContext();

  if (!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to='/' replace />;
  }
  return children;
}
