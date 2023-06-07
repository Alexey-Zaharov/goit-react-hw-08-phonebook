import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/operations';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const user = useSelector(state => state.auth.user.email);

  const handleLogOut = () => {
    if (!token) return;
    dispatch(logOut(token));
  };

  return (
    <div className={css.Conteiner}>
      <p>{user}</p>
      <button type="button" onClick={handleLogOut} className={css.Button}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
