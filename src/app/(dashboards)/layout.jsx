import React from "react";

export default function Dashboardlayout({ children }) {
  return (
    <div>
      <div className="grid grid-cols-12">
        {/* side nav bar */}
        <div className="col-span-3">
            <ul>
                <li>My Cart</li>
                <li>Home</li>
            </ul>

        </div>
        {/* Dashboard contaent */}
        <div className="col-span-9">
             <h2 className="text-2xl font-bold">Dash board Content</h2>
             {children}
        </div>
      </div>
     
    </div>
  );
}
