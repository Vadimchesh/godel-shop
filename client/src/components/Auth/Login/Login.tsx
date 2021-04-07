import React, { ReactElement } from 'react';
import styles from './styles.module.scss';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useActions } from '../../../hooks/useAction';

export default function Login(): ReactElement {
  const { email, password } = useTypedSelector(state => state.auth);
  const { changeEmail, changePassword, login } = useActions();

  const handleLogin = (e: React.FormEvent): void => {
    e.preventDefault();
    login(email, password);
  };

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
