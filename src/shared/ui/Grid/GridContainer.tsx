import styles from './GridContainer.module.scss';

export const GridContainer = ({ children }: any) => {
  return (
    <div className={styles.GridContainer}>{children}</div>
  )
}
