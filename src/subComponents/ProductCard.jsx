import React from "react";

function ProductCard() {
  return (
    <div>
      {/* PROFILE 1 */}
      <div className="product-profile product-profile--1">
        <div className="product-header">
          <div className="profile-img">
            {/* <img src="" alt="" className="profile-img" /> */}
          </div>

          <div className="profile-info">
            <h3 className="profile-name">Josh Gadgets</h3>

            <div className="product-rating">
              {/* Profile Rating SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M4.85425 18.3333L6.20841 12.4792L1.66675 8.54167L7.66675 8.02083L10.0001 2.5L12.3334 8.02083L18.3334 8.54167L13.7917 12.4792L15.1459 18.3333L10.0001 15.2292L4.85425 18.3333Z"
                  fill="#FFCA28"
                />
              </svg>

              {/* RATE 2 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M4.85425 18.3333L6.20841 12.4792L1.66675 8.54167L7.66675 8.02083L10.0001 2.5L12.3334 8.02083L18.3334 8.54167L13.7917 12.4792L15.1459 18.3333L10.0001 15.2292L4.85425 18.3333Z"
                  fill="#FFCA28"
                />
              </svg>

              {/* RATE 3 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M4.85425 18.3333L6.20841 12.4792L1.66675 8.54167L7.66675 8.02083L10.0001 2.5L12.3334 8.02083L18.3334 8.54167L13.7917 12.4792L15.1459 18.3333L10.0001 15.2292L4.85425 18.3333Z"
                  fill="#FFCA28"
                />
              </svg>

              {/* RATE 4 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M4.85425 18.3333L6.20841 12.4792L1.66675 8.54167L7.66675 8.02083L10.0001 2.5L12.3334 8.02083L18.3334 8.54167L13.7917 12.4792L15.1459 18.3333L10.0001 15.2292L4.85425 18.3333Z"
                  fill="#FFCA28"
                />
              </svg>

              {/* RATE 5 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M4.85425 18.3333L6.20841 12.4792L1.66675 8.54167L7.66675 8.02083L10.0001 2.5L12.3334 8.02083L18.3334 8.54167L13.7917 12.4792L15.1459 18.3333L10.0001 15.2292L4.85425 18.3333Z"
                  fill="#FFCA28"
                />
              </svg>

              <span className="no-five">5</span>
            </div>
          </div>
        </div>

        <h3 className="product-title">Apple iPhone 14 Pro Max</h3>

        {/* Product Price and State */}
        <div className="product-details">
          <h2 className="product-price">₦4,000,000</h2>

          <div className="product-state">
            {/* Country SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_377_2637)">
                <path
                  d="M2.66667 3.33331C1.95942 3.33331 1.28115 3.61426 0.781049 4.11436C0.280952 4.61446 0 5.29274 0 5.99998L0 18C0 18.7072 0.280952 19.3855 0.781049 19.8856C1.28115 20.3857 1.95942 20.6666 2.66667 20.6666H8V3.33331H2.66667Z"
                  fill="#009A49"
                />
                <path d="M8 3.33331H16V20.6666H8V3.33331Z" fill="#EEEEEE" />
                <path
                  d="M21.3333 3.33331H16V20.6666H21.3333C22.0406 20.6666 22.7189 20.3857 23.219 19.8856C23.719 19.3855 24 18.7072 24 18V5.99998C24 5.29274 23.719 4.61446 23.219 4.11436C22.7189 3.61426 22.0406 3.33331 21.3333 3.33331Z"
                  fill="#009A49"
                />
              </g>
              <defs>
                <clipPath id="clip0_377_2637">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <span className="span-state">Nigerian Used</span>
          </div>
        </div>

        {/* Product Logistics */}
        <div className="product-logistics">
          <div className="product-logistics-list">+ Free delivery</div>
          <div className="product-logistics-list">+ 2 year warranty</div>
          <div className="product-logistics-list">+ Available in black</div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
