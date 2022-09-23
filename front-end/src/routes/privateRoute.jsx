import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../context/useAuth';

function PrivateRoute({ children }) {
  const { loggedIn } = useAuth();

  console.log(loggedIn);
  return (
    loggedIn ? children : <Navigate replace to="/login" />
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

PrivateRoute.defaultProps = {
  children: null,
};

export default PrivateRoute;
