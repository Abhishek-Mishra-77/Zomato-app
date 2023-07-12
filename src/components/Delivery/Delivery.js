import React from 'react';
import './Delivery.css'
import Filters from '../common/filters/Filters';
import { Restaurants } from '../../Data/Restaurants';
import DeliveryCollections from './DeliveryCollections/DeliveryCollections';
import TopBrands from './TopBrands/TopBrands';
import ExploreSection from '../common/ExploreSection/ExploreSection';



const deliveryFilters = [
    {
        id: 1,
        icon: <i className='fi fi-rr-settings-sliders absolute-center'> </i>,
        title: "Filters"
    },
    {
        id: 2,
        title: "Ratting: 4.0+"
    },
    {
        id: 3,
        title: "Safe and Hygienic"
    },
    {
        id: 4,
        title: "Pure Veg"
    },
    {
        id: 5,
        title: "Delivery Time",
        icon: <i className='fi fi-rr-apps-sort absolute-center'></i>
    },
    {
        id: 6,
        title: "Great Offers"
    },


]


const restaurantList = Restaurants;

const Delivery = () => {
    return (
        <div>
            <div className='max-width'>
                <Filters filtersList={deliveryFilters} />
            </div>

            <div>
                <DeliveryCollections />
                <TopBrands />
                <ExploreSection list={restaurantList} collectionName='Delivery restaurants in Varanasi' />
            </div>

        </div>
    )
}

export default Delivery