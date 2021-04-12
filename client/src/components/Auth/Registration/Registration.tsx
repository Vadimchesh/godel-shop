import React, { ReactElement } from 'react';
import styles from './styles.module.scss';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useActions } from '../../../hooks/useAction';

export default function Registration(): ReactElement {
  const { email, password, passwordConfirmation } = useTypedSelector(state => state.auth);
  const { changeEmail, changePassword, changeSecondPassword, registration } = useActions();

  const handleRegistration = (e: React.FormEvent): void => {
    e.preventDefault();
    registration(email, password, passwordConfirmation);
  };

  return (
    <div className={styles.registration}>
      <form onSubmit={e => handleRegistration(e)}>
        <div>
          <div>
            <label htmlFor='name'>Email</label>
            <input value={email} onChange={e => changeEmail(e.currentTarget.value)} type='text' id='name' />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input value={password} onChange={e => changePassword(e.currentTarget.value)} type='password' id='password' />
          </div>
          <div>
            <label htmlFor='secondPassword'>Password</label>
            <input
              value={passwordConfirmation}
              onChange={e => changeSecondPassword(e.currentTarget.value)}
              type='password'
              id='secondPassword'
            />
          </div>
        </div>
        <button disabled={(password === passwordConfirmation) != null ? false : true}>Registration</button>
      </form>
    </div>
  );
}
