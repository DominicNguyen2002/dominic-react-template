import Cookies from 'js-cookie';
import { Navigate, useLocation } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

export default function ProtectRoute({ children }: Props) {
  const token = Cookies.get('Authorization');
  const location = useLocation();

  if (token) {
    return <>{children}</>;
  }

  return <Navigate to={`/sign-in?redirectUrL=${location.pathname}`} replace />;
}
