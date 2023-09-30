import { FC, useEffect, useState } from 'react';
import { ProductForm } from '../shared/ui/ProductForm/ProductForm';
import { Products } from '../pages/Products/Products';
import { Card } from '../shared/ui/Card/Card';
import './styles/index.scss';

export const App: FC = () => {
  
  return (
    <>
    <Products />
    {/* <Products>
      <Card 
        title={'Машина'} 
        price={10} 
        image={'https://avatars.mds.yandex.net/i?id=e11e6a892ec551e6446689d6aeca9756324bbebf-9863167-images-thumbs&n=13'} />
         <Card 
        title={'Машина'} 
        price={10} 
        image={'https://avatars.mds.yandex.net/i?id=e11e6a892ec551e6446689d6aeca9756324bbebf-9863167-images-thumbs&n=13'} /> <Card 
        title={'Машина'} 
        price={10} 
        image={'https://avatars.mds.yandex.net/i?id=e11e6a892ec551e6446689d6aeca9756324bbebf-9863167-images-thumbs&n=13'} /> <Card 
        title={'Машина'} 
        price={10} 
        image={'https://avatars.mds.yandex.net/i?id=e11e6a892ec551e6446689d6aeca9756324bbebf-9863167-images-thumbs&n=13'} /> <Card 
        title={'Машина'} 
        price={10} 
        image={'https://avatars.mds.yandex.net/i?id=e11e6a892ec551e6446689d6aeca9756324bbebf-9863167-images-thumbs&n=13'} /> <Card 
        title={'Машина'} 
        price={10} 
        image={'https://avatars.mds.yandex.net/i?id=e11e6a892ec551e6446689d6aeca9756324bbebf-9863167-images-thumbs&n=13'} /> <Card 
        title={'Машина'} 
        price={10} 
        image={'https://avatars.mds.yandex.net/i?id=e11e6a892ec551e6446689d6aeca9756324bbebf-9863167-images-thumbs&n=13'} /> <Card 
        title={'Машина'} 
        price={10} 
        image={'https://avatars.mds.yandex.net/i?id=e11e6a892ec551e6446689d6aeca9756324bbebf-9863167-images-thumbs&n=13'} /> <Card 
        title={'Машина'} 
        price={10} 
        image={'https://avatars.mds.yandex.net/i?id=e11e6a892ec551e6446689d6aeca9756324bbebf-9863167-images-thumbs&n=13'} />
    </Products> */}
      {/* <ButtonBuy /> */}
    </>
  );
}