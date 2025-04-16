import React from 'react'

const InputField = ({type="text",placeholder}) => (
  <input type={type} placeholder={placeholder} required/>
);

export default InputField;
