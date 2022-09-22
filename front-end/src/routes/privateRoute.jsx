import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function PrivateRoute({ children, isAuthorized }) {
  return (
    isAuthorized ? children : <Navigate replace to="/login" />
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.node,
  isAuthorized: PropTypes.bool.isRequired,
};

PrivateRoute.defaultProps = {
  children: null,
};

export default PrivateRoute;
