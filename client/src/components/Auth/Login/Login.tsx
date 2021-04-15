import React, { ReactElement } from 'react';
import styles from './styles.module.scss';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useActions } from '../../../hooks/useAction';
import { useHistory } from 'react-router';

export default function Login(): ReactElement {
  const { email, password, isAuth } = useTypedSelector(state => state.auth);
  const { changeEmail, changePassword, login } = useActions();
  const history = useHistory();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };
  !isAuth ? null : history.push('/profile');
  return (
    <div className={styles.login}>
      <form onSubmit={e => handleLogin(e)}>
        <div>
          <div>
            <label htmlFor='email'>Email</label>
            <input value={email} onChange={e => changeEmail(e.currentTarget.value)} type='text' id='name' />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input value={password} onChange={e => changePassword(e.currentTarget.value)} type='password' id='password' />
          </div>
        </div>
        <button disabled={email && password ? false : true}>Login</button>
      </form>
    </div>
  );
}
