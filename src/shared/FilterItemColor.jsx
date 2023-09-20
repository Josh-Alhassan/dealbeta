import React from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

function FilterItemColor() {
  return (
    <div className="filterItem">
      <div className="filterHeader filterHeader flex justify-between">
        <h5>Color</h5>
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
        <FormGroup>
          <FormControlLabel
            checked={true}
            control={<Checkbox defaultChecked />}
            label="All Color"
          />
          <FormControlLabel control={<Checkbox />} label="Black" />
          <FormControlLabel control={<Checkbox />} label="Gray" />
          <FormControlLabel control={<Checkbox />} label="White" />
        </FormGroup>
      </div>
    </div>
  );
}

export default FilterItemColor;
