import React from "react";
import { Slider } from "@mui/material";

function FilterItemPrice() {
  return (
    <div className="filterItem">
      <div className="filterHeader filterHeader flex justify-between">
        <h5>PRICE</h5>
        <span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.25 15.375L12 8.625L18.75 15.375"
              stroke="#252525"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      <div className="filter-content">
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={2}
          onChange={(e) => console.log(e)}
          valueLabelDisplay="auto"
          getAriaValueText={""}
        />
      </div>
    </div>
  );
}

export default FilterItemPrice;
