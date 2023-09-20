import React from "react";

export default function TabHeader() {
  return (
    <div className="tabbed-header">
      <ul className={"flex"}>
        <li className={"active"}>Dealers</li>
        <li>Products</li>
      </ul>
    </div>
  );
}
