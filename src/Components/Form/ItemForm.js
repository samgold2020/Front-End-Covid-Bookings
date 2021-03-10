import React from "react";
import './itemform.css';

const ItemForm = ({ label, children, type = "text",  ...otherProps }) => (
  <div className="form">
        <input type={type} {...otherProps} />
  </div>
);

export default ItemForm;