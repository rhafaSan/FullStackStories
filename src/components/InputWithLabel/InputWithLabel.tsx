import React from "react";
import InputWithLabelProps from "./types";
import  styled  from 'styled-components'

const Input = styled.input`
  width: 200px;
  height: 25px;
  border: 1px solid #50c8dd;
  border-radius: 8px;
  &:focus{
    outline: none;
    border-bottom: 3px solid #50c8dd;
  }
`

const Label = styled.label`
  font-size: 20px;
  font-weight: 500;
`

const InputWithLabel = ({ 
    id, 
    label, 
    value, 
    type= 'text', 
    onInputChange 
}: InputWithLabelProps) => (
    <div>
      <label htmlFor={id}>{label}</label> &nbsp;
        <input 
          id={id} 
          type={type} 
          value={value} 
          onChange={onInputChange} 
        />
    </div>
  
)

export default InputWithLabel;