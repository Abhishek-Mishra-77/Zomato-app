import React from 'react';
import './DeliveryCollections.css'
import Slider from "react-slick";
import NextArrow from '../../common/ArrowsCurousle/NextArrow';
import PrevArrow from '../../common/ArrowsCurousle/PrevArrow';
import DeliveryItem from '../DeliveryItem/DeliveryItem';

const deliveryItems = [
    {
        id: 1,
        title: 'Pizza',
        cover: 'https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png'
    },
    {
        id: 2,
        title: 'Cake',
        cover: 'https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png'
    },
    {
        id: 3,
        title: 'Idli',
        cover: 'https://b.zmtcdn.com/data/dish_images/d9766dd91cd75416f4f65cf286ca84331634805483.png'
    },
    {
        id: 4,
        title: 'Dosa',
        cover: 'https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png'
    },
    {
        id: 5,
        title: 'Biryani',
        cover: 'https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png'
    },
    {
        id: 6,
        title: 'Kachori',
        cover: 'https://b.zmtcdn.com/data/o2_assets/f9d277eb1668d7abf9235302402b06001632716602.png'
    },
    {
        id: 7,
        title: 'Chole Bhature',
        cover: 'https://b.zmtcdn.com/data/dish_images/c953e5ca07150e9a51f8b21102e20f7e1634805157.png'
    },
    {
        id: 8,
        title: 'Paneer',
        cover: 'https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png'
    },
    {
        id: 9,
        title: 'Chicken',
        cover: 'https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png'
    },
    {
        id: 10,
        title: 'Burger',
        cover: 'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png'
    },
    {
        id: 11,
        title: 'Paratha',
        cover: 'https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png'
    },
    {
        id: 12,
        title: 'Thali',
        cover: 'https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png'
    },


]


const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
}


const DeliveryCollections = () => {
    return (
        <div className='delivery-collections'>
            <div className='max-width'>
                <div className='collection-title'>Eat what makes you happy</div>
                <Slider {...settings}>
                    {deliveryItems.map((item) => {
                        return <DeliveryItem key={item.id} item={item} />
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default DeliveryCollections