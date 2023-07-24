import React, { useContext } from "react";
import './TabOptions.css';
import { ItemProvideContext } from "../../ContextApi/ItemProvider";

const TabOptions = (props) => {

    const cartCtx = useContext(ItemProvideContext);


    const tabs = [
        {
            id: 1,
            name: "Delivery",
            active_img: "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp",
            backdrop: "#FCEEC0",
            inactive_img: 'https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png'
        },
        {
            id: 2,
            name: "Dining Out",
            active_img: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
            backdrop: "#E5F3F3",
            inactive_img: 'https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp'
        },
        {
            id: 3,
            name: "Nightlife",
            active_img: "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
            backdrop: "#EDf4FF",
            inactive_img: 'https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png'
        },
        {
            id: 4,
            name: 'YourCart',
            active_img: 'https://cdn-icons-png.flaticon.com/128/3737/3737151.png',
            backdrop: '#EDf4FF',
            inactive_img: 'https://cdn-icons-png.flaticon.com/128/3737/3737372.png'
        }
    ]


    return (
        <div className="tab-options">
            <div className="max-width options-wrapper">
                {tabs.map((tab) => {
                    return <div onClick={() => props.setActiveTab(tab.name)}
                        className={`tab-item absolute-center cur-pro 
                        ${props.activeTab === tab.name && "active-tab"}`} key={tab.id}>

                        <div className="tab-image-container absolute-center"
                            style={{ backgroundClip: `${props.activeTab === tab.name ? tab.backdrop : ''}` }}>
                            <img
                                className="tab-image"
                                alt={tab.name}
                                src={props.activeTab === tab.name ? tab.active_img : tab.inactive_img} />
                            <span className="tab-count"> {tab.name === 'YourCart' ? cartCtx.count : ''}</span>

                        </div>

                        <div className="tab-name">{tab.name}</div>

                    </div>
                })}



            </div>
        </div>
    )
}

export default TabOptions