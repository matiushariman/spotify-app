import styles from './SharedUiComponents.module.css';

/* eslint-disable-next-line */
export interface SharedUiComponentsProps {}

export function SharedUiComponents(props: SharedUiComponentsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedUiComponents!</h1>
    </div>
  );
}

export default SharedUiComponents;
