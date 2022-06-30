import React, { InputHTMLAttributes } from 'react'


interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  typePayment: string
}

const PaymentForm: React.FC<RadioProps> = ({typePayment, ...rest}) => {
  console.log(typePayment)
  console.log("estou no paymentform")
  return (
    <>
      <fieldset>
        <legend>Escolha a forma de pagamento</legend>
        <div>
          <input type="radio" name="payment_form" defaultChecked={typePayment == 'bolet'? true: false} value="bolet" />
          <label htmlFor="payment_form">Boleto</label>
        </div>
        <div>
          <input type="radio" name="payment_form" defaultChecked={typePayment == 'card'? true: false} value="card"/>
          <label htmlFor="payment_form">Cartão</label>
        </div>
      </fieldset>
    </>
  )
}

export default PaymentForm