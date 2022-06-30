import React, { InputHTMLAttributes } from 'react'

interface TituloText extends InputHTMLAttributes<HTMLInputElement> {
  titulo: string
}

const Titulo: React.FC<TituloText> = ({titulo}) => {
  return (
    <h1>{titulo}</h1>
  )
}

export default Titulo;