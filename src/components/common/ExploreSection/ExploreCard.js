import React from 'react';
import './ExploreCard.css';

const ExploreCard = ({restaurant}) => {
 
    const name = restaurant?.info?.name ?? "";
    const coverImg = restaurant?.info?.image?.url;
    const deliveryTime = restaurant?.order?.deliveryTime;
    const rating = restaurant?.info?.rating?.rating_text;
    const aproxPrice = restaurant?.info?.cfo?.text;
    const offers = restaurant?.bulkOffers ?? [];
    const cuisines = restaurant?.info?.cuisine?.map((item) => item.name).slice(0,3);
    
     const bottomContainers = restaurant?.bottomContainers;
     const goldOff = restaurant?.gold?.text;
     const proOff = offers.length > 1 ?  offers[0].text : null;
     const discount = offers.length > 1 ? offers[1].text : offers.length === 1 ? offers[0].text : null;

    
    
    return (
        <div className='explore-card cur-po'>
            <div className='explore-card-cover'>
                <img src={coverImg} alt={name} className='explore-card-image'/>
                <div className='delivery-time'>{deliveryTime}</div>
                {proOff && <div className='pro-off'>{proOff}</div>}
                {goldOff && <div className='gold-off absolute-center'>{goldOff}</div>}
                {discount && <div className='discount absolute-center'>{discount}</div>}
            </div>
        </div>
    )
}

export default ExploreCard;