import styles from './Greetings.module.css';

/* eslint-disable-next-line */
export interface GreetingsProps {}

export function Greetings(props: GreetingsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Greetings!</h1>
    </div>
  );
}

export default Greetings;
