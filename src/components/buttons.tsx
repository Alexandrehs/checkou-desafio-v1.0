import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps {
  text: string,
  children?: React.ReactNode,
  props?: any,
  onClick?: any
}

const Buttons: React.FC<ButtonProps> = ({text, children, onClick, ...props}) => {
  return (
    <button {...props} onClick={onClick}>
      {text}
    </button>
  )
}

export default Buttons