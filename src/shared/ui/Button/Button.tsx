import { FC } from 'react'
import styles from './Button.module.scss'

interface IButtonProps {
  clickHandler?: (e: any) => void
  children?: any
}

export const Button: FC<IButtonProps> = ({clickHandler, children}) => {
  return (
    <button
      className={styles.button}
      onClick={clickHandler}>
      {children}
    </button>
  )
}
