import { FC } from 'react'
import { Button } from '../Button/Button'
import styles from './Card.module.scss'

interface ICardProps {
  title: string
  price: number
  image: string
}


export const Card: FC<ICardProps> = ({ image, title, price }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        <img src={image} alt={'img'} />
      </div>
        {/* <div className={styles.cardBody}> */}
          <h2>{title}</h2>
          <p>{price} {"₽"}</p>
          <Button clickHandler={()=>alert('Покупка совершена')}>{'Купить'}</Button>
        {/* </div> */}
    </div>
  )
}
