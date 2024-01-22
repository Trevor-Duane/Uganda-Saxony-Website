import React from "react";

const TextInput = ({className, type, placeholder, name, iconName}) => {
  return (
    <div className={className}>
       <span className="position-absolute">{iconName}</span>
      <input type={type} placeholder={placeholder} name={name} required />
    </div>
  );
};

export default TextInput;
