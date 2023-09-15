import React from "react";
import "./../style/home.css";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Rating,
  Slider,
} from "@mui/material";

function Home() {
  return (
    <section className="pt-16 bg-white flex">
      <div id="sidebar">
        <div className="filterTopSection">
          <svg
            width="40"
            height="41"
            viewBox="0 0 40 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.875 8H38.125C38.6223 8 39.0992 8.19754 39.4508 8.54917C39.8025 8.90081 40 9.37772 40 9.875C40 10.3723 39.8025 10.8492 39.4508 11.2008C39.0992 11.5525 38.6223 11.75 38.125 11.75H1.875C1.37772 11.75 0.900805 11.5525 0.549175 11.2008C0.197544 10.8492 0 10.3723 0 9.875C0 9.37772 0.197544 8.90081 0.549175 8.54917C0.900805 8.19754 1.37772 8 1.875 8ZM7.5 19.875C7.5 19.3777 7.69754 18.9008 8.04917 18.5492C8.40081 18.1975 8.87772 18 9.375 18H30.625C31.1223 18 31.5992 18.1975 31.9508 18.5492C32.3025 18.9008 32.5 19.3777 32.5 19.875C32.5 20.3723 32.3025 20.8492 31.9508 21.2008C31.5992 21.5525 31.1223 21.75 30.625 21.75H9.375C8.87772 21.75 8.40081 21.5525 8.04917 21.2008C7.69754 20.8492 7.5 20.3723 7.5 19.875ZM15 29.875C15 29.3777 15.1975 28.9008 15.5492 28.5492C15.9008 28.1975 16.3777 28 16.875 28H23.125C23.6223 28 24.0992 28.1975 24.4508 28.5492C24.8025 28.9008 25 29.3777 25 29.875C25 30.3723 24.8025 30.8492 24.4508 31.2008C24.0992 31.5525 23.6223 31.75 23.125 31.75H16.875C16.3777 31.75 15.9008 31.5525 15.5492 31.2008C15.1975 30.8492 15 30.3723 15 29.875Z"
              fill="#737373"
            />
          </svg>
          <span>FILTER</span>
        </div>
        <div className="filterElements">
          <div className="filterItem">
            <div className="filterHeader filterHeader flex justify-between">
              <h5>Brands</h5>
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
                  control={<Checkbox defaultChecked />}
                  label="Iphone"
                />
              </FormGroup>
            </div>
          </div>

          <div className="filterItem">
            <div className="filterHeader filterHeader flex justify-between">
              <h5>TYPES</h5>
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
                  label="Brand New"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Foreign used"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Nigerian used"
                />
              </FormGroup>
            </div>
          </div>
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
          <div className="filterItem">
            <div className="filterHeader filterHeader flex justify-between">
              <h5>rating</h5>
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
              <FormGroup className={"rating-ui"}>
                <FormControlLabel control={<Checkbox defaultChecked />} />
                <Rating
                  name="simple-controlled"
                  value={2}
                  onChange={(event, newValue) => {}}
                />
                <span>5</span>
              </FormGroup>
              <FormGroup className={"rating-ui"}>
                <FormControlLabel control={<Checkbox defaultChecked />} />
                <Rating
                  name="simple-controlled"
                  value={2}
                  onChange={(event, newValue) => {}}
                />
                <span>5</span>
              </FormGroup>
              <FormGroup className={"rating-ui"}>
                <FormControlLabel control={<Checkbox defaultChecked />} />
                <Rating
                  name="simple-controlled"
                  value={2}
                  onChange={(event, newValue) => {}}
                />
                <span>5</span>
              </FormGroup>
            </div>
          </div>
        </div>
      </div>
      <div id="content-area">
        <div className="content-header-search"></div>
        <div className="content-body-area">
          <div className="tabbed-header">
            <ul className={"flex"}>
              <li className={"active"}>Dealers</li>
              <li>Products</li>
            </ul>
          </div>
          <div className="content-result-pane p-3 pt-5">
            <span>Search results for “iPhone 14 Pro Max” 235 ITEMS</span>
            <div className={"flex"}>
              <div className="result-cards"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
