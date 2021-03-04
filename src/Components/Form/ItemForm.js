import React from "react";
import './itemform.css';

const ItemForm = ({ label, children, type = "text",  ...otherProps }) => (
  <div className="form">
    {type === "text" ? (
      <>
      {/* otherProps contains the placeholder text */}
        <input type={type} {...otherProps} />
      </>
    ) : (
      <>
        <label />
        <input type={type} {...otherProps}/>
        {label}
      </>
    )}
  </div>
);

export default ItemForm;