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
        <div className="content-header-search">
          {/* Content Search Bar Container */}
          <div className="content-search-container">
            {/* Input Search Bar */}
            <div className="input-bar search-bar--search">
              {/* Search Icon SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.133 14.867 4 11 4C7.133 4 4 7.133 4 11C4 14.867 7.133 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z"
                  fill="#737373"
                />
              </svg>

              {/* Search input */}
              <input
                className="search-input"
                type="text"
                name=""
                id="search-field"
                placeholder="iphone 14 Pro Max"
              />
            </div>
            {/* End of Input Search Bar */}

            {/* Price Tag Container */}
            <div className="price-tag-container">
              {/* Price Tag SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M10.904 2.59998L20.804 4.01398L22.218 13.914L13.025 23.106C12.8375 23.2934 12.5832 23.3988 12.318 23.3988C12.0528 23.3988 11.7985 23.2934 11.611 23.106L1.71099 13.206C1.52382 13.0185 1.4187 12.7644 1.4187 12.4995C1.4187 12.2346 1.52382 11.9805 1.71099 11.793L10.904 2.59998ZM11.611 4.72098L3.83299 12.5L12.318 20.985L20.097 13.207L19.036 5.78198L11.611 4.72098ZM13.733 11.085C13.542 10.9005 13.3896 10.6798 13.2848 10.4358C13.18 10.1918 13.1248 9.92934 13.1225 9.66378C13.1202 9.39822 13.1708 9.13486 13.2713 8.88907C13.3719 8.64328 13.5204 8.41997 13.7082 8.23219C13.896 8.0444 14.1193 7.89589 14.3651 7.79533C14.6109 7.69477 14.8742 7.64417 15.1398 7.64647C15.4053 7.64878 15.6678 7.70396 15.9118 7.80877C16.1558 7.91359 16.3765 8.06596 16.561 8.25698C16.9253 8.63418 17.1269 9.13938 17.1223 9.66378C17.1178 10.1882 16.9074 10.6898 16.5366 11.0606C16.1658 11.4314 15.6642 11.6418 15.1398 11.6463C14.6154 11.6509 14.1102 11.4493 13.733 11.085Z"
                  fill="#737373"
                />
              </svg>

              <p className="price-range">N200K - N400K</p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M18.75 9.125L12 15.875L5.25 9.125"
                  stroke="#737373"
                  stroke-width="2.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            {/* End of Price Tag */}

            {/* Location Container */}
            <div className="price-tag-container">
              {/* Location SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M12 14C11.2583 14 10.5333 13.7801 9.91661 13.368C9.29993 12.956 8.81928 12.3703 8.53545 11.6851C8.25162 10.9998 8.17736 10.2458 8.32206 9.51841C8.46675 8.79098 8.8239 8.1228 9.34835 7.59835C9.8728 7.0739 10.541 6.71675 11.2684 6.57206C11.9958 6.42736 12.7498 6.50162 13.4351 6.78545C14.1203 7.06928 14.706 7.54993 15.118 8.16661C15.5301 8.7833 15.75 9.50832 15.75 10.25C15.7488 11.2442 15.3533 12.1973 14.6503 12.9003C13.9473 13.6033 12.9942 13.9988 12 14ZM12 8C11.555 8 11.12 8.13196 10.75 8.3792C10.38 8.62643 10.0916 8.97783 9.92127 9.38896C9.75098 9.8001 9.70642 10.2525 9.79323 10.689C9.88005 11.1254 10.0943 11.5263 10.409 11.841C10.7237 12.1557 11.1246 12.37 11.561 12.4568C11.9975 12.5436 12.4499 12.499 12.861 12.3287C13.2722 12.1584 13.6236 11.87 13.8708 11.5C14.118 11.13 14.25 10.695 14.25 10.25C14.2494 9.65345 14.0122 9.0815 13.5903 8.65967C13.1685 8.23784 12.5966 8.0006 12 8Z"
                  fill="#737373"
                />
                <path
                  d="M12 23L5.67301 15.5382C5.58509 15.4262 5.49809 15.3135 5.41201 15.2C4.33124 13.7763 3.74739 12.0374 3.75001 10.25C3.75001 8.06196 4.6192 5.96354 6.16638 4.41637C7.71355 2.86919 9.81197 2 12 2C14.188 2 16.2865 2.86919 17.8336 4.41637C19.3808 5.96354 20.25 8.06196 20.25 10.25C20.2526 12.0366 19.669 13.7747 18.5888 15.1978L18.588 15.2C18.588 15.2 18.363 15.4955 18.3293 15.5353L12 23ZM6.60901 14.2963C6.61051 14.2963 6.78451 14.5272 6.82426 14.5767L12 20.681L17.1825 14.5685C17.2155 14.5272 17.391 14.2948 17.3918 14.294C18.2746 13.1308 18.7517 11.7103 18.75 10.25C18.75 8.45979 18.0388 6.7429 16.773 5.47703C15.5071 4.21116 13.7902 3.5 12 3.5C10.2098 3.5 8.49291 4.21116 7.22704 5.47703C5.96117 6.7429 5.25001 8.45979 5.25001 10.25C5.24844 11.7112 5.72534 13.1326 6.60901 14.2963Z"
                  fill="#737373"
                />
              </svg>

              <p className="location">Port Harcourt</p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M18.75 9.125L12 15.875L5.25 9.125"
                  stroke="#737373"
                  stroke-width="2.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            {/* End of Location */}

            {/* BookMark */}
            <div className="price-tag-container bookmark-container">
              {/* Bookmark SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <g clip-path="url(#clip0_377_2402)">
                  <path
                    d="M19.7144 1.35712H4.28582C3.33905 1.35712 2.57153 2.12463 2.57153 3.0714V21.9285C2.57153 22.8753 3.33905 23.6428 4.28582 23.6428H19.7144C20.6612 23.6428 21.4287 22.8753 21.4287 21.9285V3.0714C21.4287 2.12463 20.6612 1.35712 19.7144 1.35712Z"
                    stroke="#737373"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.57153 18.5H21.4287M7.71439 5.64282H16.2858M7.71439 9.92854H16.2858M7.71439 14.2143H12.8572"
                    stroke="#737373"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_377_2402">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <p className="book-mark">Both</p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M18.75 9.125L12 15.875L5.25 9.125"
                  stroke="#737373"
                  stroke-width="2.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            {/* End of BookMark */}

            {/* Search Icon */}
            <div className="search-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
              >
                <path
                  d="M24.0414 22.656L29.7521 28.3654L27.8654 30.252L22.1561 24.5414C20.0317 26.2443 17.3894 27.1706 14.6667 27.1667C8.04275 27.1667 2.66675 21.7907 2.66675 15.1667C2.66675 8.54269 8.04275 3.16669 14.6667 3.16669C21.2907 3.16669 26.6667 8.54269 26.6667 15.1667C26.6706 17.8894 25.7444 20.5317 24.0414 22.656ZM21.3667 21.6667C23.0589 19.9265 24.0039 17.5939 24.0001 15.1667C24.0001 10.0107 19.8227 5.83335 14.6667 5.83335C9.51075 5.83335 5.33341 10.0107 5.33341 15.1667C5.33341 20.3227 9.51075 24.5 14.6667 24.5C17.094 24.5038 19.4266 23.5588 21.1667 21.8667L21.3667 21.6667Z"
                  fill="#F7F7F7"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="content-body-area">
          <div className="tabbed-header">
            <ul className={"flex"}>
              <li className={"active"}>Dealers</li>
              <li>Products</li>
            </ul>
          </div>
          <div className="content-result-pane p-3 pt-5">
            <span className="span-search">Search results for “iPhone 14 Pro Max” <span className="span-items"> 235 items</span> </span> 
            <div className= "content-container">
              {/* <div className="result-cards"></div> */}

              {/* SORTBY CARD */}
              <div className="sortby-card">
                {/* Sort SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M13.9699 7.53001C14.1105 7.67046 14.3012 7.74935 14.4999 7.74935C14.6987 7.74935 14.8893 7.67046 15.0299 7.53001L15.7499 6.81001V17C15.7499 17.1989 15.8289 17.3897 15.9696 17.5303C16.1102 17.671 16.301 17.75 16.4999 17.75C16.6988 17.75 16.8896 17.671 17.0302 17.5303C17.1709 17.3897 17.2499 17.1989 17.2499 17V6.81001L17.9699 7.53001C18.0386 7.6037 18.1214 7.6628 18.2134 7.70379C18.3054 7.74478 18.4047 7.76683 18.5054 7.7686C18.6061 7.77038 18.7061 7.75186 18.7995 7.71413C18.8929 7.67641 18.9777 7.62027 19.0489 7.54905C19.1202 7.47783 19.1763 7.393 19.214 7.29961C19.2518 7.20622 19.2703 7.10619 19.2685 7.00549C19.2667 6.90479 19.2447 6.80547 19.2037 6.71347C19.1627 6.62147 19.1036 6.53867 19.0299 6.47001L17.0299 4.47001C16.8893 4.32956 16.6987 4.25067 16.4999 4.25067C16.3012 4.25067 16.1105 4.32956 15.9699 4.47001L13.9699 6.47001C13.8295 6.61064 13.7506 6.80126 13.7506 7.00001C13.7506 7.19876 13.8295 7.38939 13.9699 7.53001ZM9.24991 17.19L9.96991 16.47C10.0386 16.3963 10.1214 16.3372 10.2134 16.2962C10.3054 16.2552 10.4047 16.2332 10.5054 16.2314C10.6061 16.2296 10.7061 16.2482 10.7995 16.2859C10.8929 16.3236 10.9777 16.3798 11.0489 16.451C11.1202 16.5222 11.1763 16.607 11.214 16.7004C11.2518 16.7938 11.2703 16.8938 11.2685 16.9945C11.2667 17.0952 11.2447 17.1946 11.2037 17.2866C11.1627 17.3785 11.1036 17.4614 11.0299 17.53L9.02991 19.53C8.88928 19.6705 8.69866 19.7494 8.49991 19.7494C8.30116 19.7494 8.11053 19.6705 7.96991 19.53L5.96991 17.53C5.89622 17.4614 5.83712 17.3785 5.79613 17.2866C5.75514 17.1946 5.73309 17.0952 5.73132 16.9945C5.72954 16.8938 5.74807 16.7938 5.78579 16.7004C5.82351 16.607 5.87965 16.5222 5.95087 16.451C6.02209 16.3798 6.10692 16.3236 6.20031 16.2859C6.2937 16.2482 6.39373 16.2296 6.49443 16.2314C6.59513 16.2332 6.69445 16.2552 6.78645 16.2962C6.87845 16.3372 6.96125 16.3963 7.02991 16.47L7.74991 17.19V7.00001C7.74991 6.8011 7.82893 6.61033 7.96958 6.46968C8.11023 6.32903 8.301 6.25001 8.49991 6.25001C8.69882 6.25001 8.88959 6.32903 9.03024 6.46968C9.17089 6.61033 9.24991 6.8011 9.24991 7.00001V17.19Z"
                    fill="black"
                  />
                </svg>
                <span className="sort-by">Sort By</span>
              </div>

              <span className="latest">Latest</span>
              <span className="cheapest">Cheapest</span>
              {/* End Trial Phase */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
