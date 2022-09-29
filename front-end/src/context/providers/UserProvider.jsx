import PropTypes from 'prop-types';
import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
  useCallback,
} from 'react';
import ProviderApi from '../../services/api';
import { useAuth } from './useAuth';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [delUser, setDelUser] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (user.token) {
      (async () => {
        const { success, data } = await ProviderApi.getUsers(user.token);
        if (success) {
          setUsers(data);
        }
      })();
    }
  }, [user, delUser]);

  const deleteUser = useCallback(async (id) => {
    await ProviderApi.deleteUser(user.token, id);
    setDelUser(!delUser);
  }, [delUser, user.token]);

  const value = useMemo(() => ({ users, deleteUser }), [users, deleteUser]);

  return <UserContext.Provider value={ value }>{children}</UserContext.Provider>;
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useUsers = () => useContext(UserContext);
