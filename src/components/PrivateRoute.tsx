import { Navigate, To } from "react-router-dom";
import { useStoreSelector } from "../redux/hooks";

function PrivateRoute({ children, to }: { children: JSX.Element; to: To }) {
  const { token } = useStoreSelector((state) => state.auth);
  if (!token) return <Navigate to={to} replace />;
  return children;
}

export default PrivateRoute;
