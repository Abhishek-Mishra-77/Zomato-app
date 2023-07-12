import React from "react";
import './Filters.css';
import FilterItem from "./filterItem/FilterItem";

const Filters = (props) => {
    return (
        <div className="filters">
            {props.filtersList && props.filtersList.map((filter) => {
                return <FilterItem filter={filter} key={filter.id} />

            })}
        </div>
    )
}

export default Filters;