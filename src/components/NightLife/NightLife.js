import React from 'react';
import './NightLife.css';
import Collection from '../common/Collection/Collection';
import { nightLife } from '../../Data/nightLife';
import Filters from '../common/filters/Filters';
import ExploreSection from '../common/ExploreSection/ExploreSection';


const nightFilters = [
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
  {
    id: 7,
    title: "Open Now"
  },
  {
    id: 8,
    title: "Serves Alcohol"
  },

]

const collectionList = [
  {
    id: '1',
    title: 'Leet Party Places',
    cover: 'https://b.zmtcdn.com/data/collections/d6c20926317f6753461c59af08d566f1_1674820841.jpg?output-format=webp',
    places: '12 places',
  },
  {
    id: '2',
    title: 'Night Boom',
    cover: 'https://b.zmtcdn.com/data/pictures/0/19355200/2e477e1d1aba526511bdc94a921dea47_featured_v2.jpg',
    places: '14 places',
  },
  {
    id: '3',
    title: 'Cebel-loved Places',
    cover: 'https://b.zmtcdn.com/data/pictures/0/20061990/9f5ad095ef15f8d318fbb56637fd5405_featured_v2.jpg',
    places: '15 places',
  },
  {
    id: '4',
    title: 'trending this week',
    cover: 'https://b.zmtcdn.com/data/pictures/5/20530245/048e430d26464f36f877f785bb4eaa4f_featured_v2.jpg',
    places: '12 places',
  },
  {
    id: '5',
    title: 'Best korean restaurants',
    cover: 'https://b.zmtcdn.com/data/pictures/9/20284969/94946d5983ac4c925f9656841c4801ec_featured_v2.jpg',
    places: '16 places',
  },
  {
    id: '6',
    title: 'Great Cafes',
    cover: 'https://b.zmtcdn.com/data/pictures/8/3298/8347848dcf73a1acf5bc5d21eb391e37_featured_v2.jpg',
    places: '10 places',
  },
  {
    id: '7',
    title: 'Seren RoofTop Places',
    cover: 'https://b.zmtcdn.com/data/pictures/5/313175/2d09c61b60b298e9ae579d0cb07afec4_featured_v2.jpg',
    places: '9 places',
  },
  {
    id: '8',
    title: 'Romantics Dining Places',
    cover: 'https://b.zmtcdn.com/data/pictures/7/18254537/8b0b3f07b8707fac2c7836e496362bb4_featured_v2.jpg',
    places: '15 places',
  },
  {
    id: '9',
    title: 'Winner of Zomato Restaurants',
    cover: 'https://b.zmtcdn.com/data/pictures/chains/9/1799/661b915897d71a4a192e26f00cdb6096_featured_v2.jpg',
    places: '32 places',
  },
]


const nightLifeList = nightLife;

const NightLife = () => {
  return (
    <div>
      <Collection list={collectionList} />

      <div className='max-width'>
        <Filters filtersList={nightFilters} />
      </div>

      <ExploreSection list={nightLifeList} collectionName='Nightlife Restaurants in' />

    </div>
  )
}

export default NightLife