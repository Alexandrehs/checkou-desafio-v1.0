import React, { InputHTMLAttributes } from 'react'

import {Input} from '../assets/style'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string,
  name: string,
  label: string
  onChange?: any
}

const Inputs: React.FC<InputProps> = ({type, name, label, onChange}) => {
  return (
    <>
      <label>{label}</label>
      <Input type={type} name={name} onChange={onChange}/>
    </>
  )
}

export default Inputs