import React from 'react';
import './ExploreSection.css';
import ExploreCard from './ExploreCard';


const ExploreSection = (props) => {
    return (
        <div className='max-width explore-section'>
            <div className='collection-title'>{props.collectionName}</div>
            <div className='expore-grid'>
                {props.list.map((restaurants) => {
                 return <ExploreCard key={restaurants.id} restaurant={restaurants}/>
                })}
            </div>
        </div>
    )
}

export default ExploreSection