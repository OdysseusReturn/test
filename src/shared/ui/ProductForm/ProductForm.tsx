import { useState, useRef, useEffect, FC } from 'react';
import { Button } from '../Button/Button';
import styles from './ProductForm.module.scss';


interface IInputProps {
    items: string[]
    setItems: (items: string[]) => void
}


export const ProductForm: FC<IInputProps> = ({ items, setItems }) => {

    const titleRef = useRef<HTMLInputElement>(null)
    const priceRef = useRef<HTMLInputElement>(null)
    const imageRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        // @ts-ignore
        setItems([...items, {
            title: titleRef.current?.value as string,
            price: priceRef.current?.value as string,
            image: imageRef.current?.value as string
            }])
        // @ts-ignore
        titleRef.current.value = ''
        // @ts-ignore
        priceRef.current.value = 0
        // @ts-ignore
        imageRef.current.value = ''
    }

    return(
        <form className={styles.form} onSubmit={(e) => {handleSubmit(e)}}>
            <input
                className={styles.input}
                type='text'
                placeholder='Название товара'
                ref={titleRef}
            />
            <input
                className={styles.input}
                type='number'
                placeholder='Цена товара'
                ref={priceRef}
            />
            <input
                className={styles.input}
                type='text'
                placeholder='Ссылка на картинку'
                ref={imageRef}
            />
            <Button>Добавить товар</Button>
        </form>
    )
}