import { Navigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

export default function ProtectedRoute({ requireAdmin, isLogin, children }) {
  const { user } = useUserContext();

  if (requireAdmin) {
    if (!user || (requireAdmin && !user.isAdmin)) {
      return <Navigate to='/' replace />;
    }
    return children;
  }
  if (isLogin) {
    if (user) {
      return <Navigate to='/' />;
    }
  }

  return <>{children}</>;
}
