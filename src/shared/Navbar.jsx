import React from 'react'
import './../style/navbar.css'

function Navbar() {
  return (
    <nav className="flex px-4 navbar  items-center relative">
        <div className={"flex flex-row justify-between subparent"}>
          <span>DealBeta</span>
          <div>
              <button className={"p-3 px-5"}>DealBeta
                  Want to be a vendor? Click here</button>
          </div>
        </div>

    </nav>
  )
}

export default Navbar