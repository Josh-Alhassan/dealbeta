import React from "react";
import FilterItemBrands from "../shared/FilterItemBrands";
import FilterItemTypes from "../shared/FilterItemTypes";
import FilterItemColor from "../shared/FilterItemColor";
import FilterItemPrice from "../shared/FilterItemPrice";
import FilterItemRating from "../shared/FilterItemRating";

function FilterElements() {
  return (
    <div className="filterElements">
      <FilterItemBrands />
      <FilterItemTypes />
      <FilterItemColor />
      <FilterItemPrice />
      <FilterItemRating />
    </div>
  );
}

export default FilterElements;
