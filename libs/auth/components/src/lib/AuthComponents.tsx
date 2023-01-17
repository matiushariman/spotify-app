import styles from './AuthComponents.module.css';

/* eslint-disable-next-line */
export interface AuthComponentsProps {}

export function AuthComponents(props: AuthComponentsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AuthComponents!</h1>
    </div>
  );
}

export default AuthComponents;
