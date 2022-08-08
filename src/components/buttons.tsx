import React, { ButtonHTMLAttributes } from 'react'
import { Button } from '../assets/style'

interface ButtonProps {
  text: string,
  children?: React.ReactNode,
  props?: any,
  onClick?: any
}

const Buttons: React.FC<ButtonProps> = ({text, children, onClick, ...props}) => {
  return (
    <Button{...props} onClick={onClick}>
      {text}
    </Button>
  )
}

export default Buttons