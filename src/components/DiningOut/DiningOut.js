import React from 'react';
import './DiningOut.css'
import { diningOut } from '../../Data/diningData';
import Collection from '../common/Collection/Collection';
import Filters from '../common/filters/Filters';
import ExploreSection from '../common/ExploreSection/ExploreSection';


const collectionList = [
  {
    id: '1',
    title: 'trending this week',
    cover: 'https://b.zmtcdn.com/data/collections/2deab8e9f06ff125e80f5cc09f11e4d7_1674569132.jpg',
    places: '12 places',
  },
  {
    id: '2',
    title: 'Best insta worthy places',
    cover: 'https://b.zmtcdn.com/data/collections/ba34f5659db282f10729ed6773f278d2_1688041325.png',
    places: '14 places',
  },
  {
    id: '3',
    title: 'Cebel-loved Places',
    cover: 'https://b.zmtcdn.com/data/pictures/1/20053521/e740839c636bdc877647edeffa51db2d_featured_v2.jpg',
    places: '15 places',
  },
  {
    id: '4',
    title: 'trending this week',
    cover: 'https://b.zmtcdn.com/data/pictures/3/19775923/6477c56df7866a2fbb4d876c48e2a708_featured_v2.jpg',
    places: '12 places',
  },
  {
    id: '5',
    title: 'Best korean restaurants',
    cover: 'https://b.zmtcdn.com/data/collections/57f7f839a8594abf4764d47d67151f68_1687954533.png',
    places: '16 places',
  },
  {
    id: '6',
    title: 'Great Cafes',
    cover: 'https://b.zmtcdn.com/data/collections/ef1c6eee407e8faa590c5fab1e5fd5c3_1679127320.jpg',
    places: '10 places',
  },
  {
    id: '7',
    title: 'Seren RoofTop Places',
    cover: 'https://b.zmtcdn.com/data/collections/c552488ee2d95ff698476869113c5702_1674569243.jpg',
    places: '9 places',
  },
  {
    id: '8',
    title: 'Romantics Dining Places',
    cover: 'https://b.zmtcdn.com/data/collections/aaccef7199995c73258750f61c1961f0_1688041059.jpg',
    places: '15 places',
  },
  {
    id: '9',
    title: 'Winner of Zomato Restaurants',
    cover: 'https://b.zmtcdn.com/data/collections/77c1b9704985885cbe2cb094e9983eab_1682080540.jpg',
    places: '32 places',
  },
]

const diningFilters = [
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
    title: "Gold"
  },


]



const diningOutList = diningOut;



const DiningOut = () => {
  return (
    <div>
      <Collection list={collectionList} />
      <div className='max-width'>
        <Filters filtersList={diningFilters} />
      </div>
      <ExploreSection list={diningOutList} collectionName='Trending dining restaurants in' />
    </div>
  )
}

export default DiningOut