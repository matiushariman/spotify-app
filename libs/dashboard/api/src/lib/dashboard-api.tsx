import styles from './dashboard-api.module.css';

/* eslint-disable-next-line */
export interface DashboardApiProps {}

export function DashboardApi(props: DashboardApiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DashboardApi!</h1>
    </div>
  );
}

export default DashboardApi;
