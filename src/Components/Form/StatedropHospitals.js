import React from "react";

//hospitalOptions array with the first parameter the value and the second the name
const hospitalOptions = [
 ["NewYork-Presbyterian Lower Manhattan Hospital", "NewYork-Presbyterian Lower Manhattan Hospital"],
 ["NYC Health + Hospitals / Bellevue", "NYC Health + Hospitals / Bellevue"],
 ["Mount Sinai Beth Israel", "Mount Sinai Beth Israel"],
 ["Kings County Hospital Center", "Kings County Hospital Center"]
]

const StateDropHospitals = ({ label, ...others }) => (
  <>
  <div>
    <select {...others}>
      {/* //map creates a new array  with the required value and the name*/}
      {hospitalOptions.map(([value, name]) => (
        <option key={name} value={value}>{name}</option>
        ))}
    </select>
      </div> 
  </>
);

export default StateDropHospitals;