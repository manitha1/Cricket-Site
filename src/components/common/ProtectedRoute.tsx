import { Navigate, Outlet } from 'react-router-dom';

// TODO: Replace with real auth state from Supabase
const useAuth = () => {
  // Mock auth hook - currently allows access to everything for development
  return {
    isAuthenticated: true,
    userRole: 'admin', // 'admin', 'member', 'player'
  };
};

interface ProtectedRouteProps {
  allowedRoles?: string[];
}

export default function ProtectedRoute({ allowedRoles }: ProtectedRouteProps) {
  const { isAuthenticated, userRole } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
}
