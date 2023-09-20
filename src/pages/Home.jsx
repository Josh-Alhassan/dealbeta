import React from "react";
import "./../style/home.css";

import HeaderSearch from "../subComponents/HeaderSearch";
import TabHeader from "../subComponents/TabHeader";
import ResultPane from "../subComponents/ResultPane";
import ProductProfile from "../component/ProductProfile";
import FilterTopSection from "../subComponents/FilterTopSection";
import FilterElements from "../component/FilterElements";

// import profileOne from 'ass'

function Home() {
  return (
    <section className="pt-16 bg-white flex">
      <div id="sidebar">
        <FilterTopSection />
        <FilterElements />
      </div>
      <div id="content-area">
        <HeaderSearch />
        <div className="content-body-area">
          <TabHeader />
          <ResultPane />

          {/* ############################################## */}
          {/* =========== PRODUCT PROFILES SECTION ========= */}
          {/* ############################################## */}

          <ProductProfile />
        </div>
      </div>
    </section>
  );
}

export default Home;
