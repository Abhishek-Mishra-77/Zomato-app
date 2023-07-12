import React from 'react';
import NextArrow from '../../common/ArrowsCurousle/NextArrow';
import PrevArrow from '../../common/ArrowsCurousle/PrevArrow';
import Slider from 'react-slick';
import './TopBrands.css';



const topBrandsList = [
    {
        id: 1,
        time: "35 min",
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/775f928725d1a9dd80422632de22c224_1611376239.png'
    },
    {
        id: 2,
        time: "25 min",
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/3bd971b1a5783e208a9782c3604fa9f3_1601885754.png'
    },
    {
        id: 3,
        time: "26 min",
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/4d016eeff686a88becd56bba073f18cd_1605111085.png'
    },
    {
        id: 4,
        time: "36 min",
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/d26cedd52fc09c7a72174a36340a4a6e_1573638778.png'
    },
    {
        id: 5,
        time: "20 min",
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/0619ae0b489d44dd3562538f7768e48a_1658818124.png'
    },
    {
        id: 6,
        time: "27 min",
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png'
    },
]

const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
}

const TopBrands = () => {
    return (
        <div className='top-brands max-width'>
            <div className='collection-title'>Top brands for you</div>
            <Slider {...settings}>
                {topBrandsList.map((brand) => {
                    return <div>
                        <div className='top-brands-cover'>
                            <img 
                            src={brand.cover}
                            className='top-brands-image' 
                            alt={brand.time}/>
                        </div>
                    </div>
                })}
            </Slider>
        </div>
    )
}

export default TopBrands