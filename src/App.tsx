import React, { useEffect, useState } from 'react'
import './App.css'
import Inputs from './components/inputs'
import Titulo from './components/titulo'
import {Container, Form, Hr, CardForm, Body, ClientData, PaymentData, Divisor, FieldSet} from './assets/style'
import Buttons from './components/buttons'
import axios from 'axios'


function App() {  
  const [paymentWith, setPaymentWith] = useState<string>('bolet')
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [cpf, setCpf] = useState<string>('') 
  const [cardHolderName, setCardHolderName] = useState<string>('')
  const [cardNumber, setCardNumber] = useState<string>('')
  const [cardCVV, setCardCVV] = useState<number>()
  const [cardMonthExpire, setCardMonthExpire] = useState<number>()
  const [cardYearExpire, setCardYearExpire] = useState<number>()
  const [paymentValue, setPaymentValue] = useState<number>(1250)

  var url = "http://localhost:8080/payment/card"

  const [client, setClient] = useState({
    name,
    email,
    cpf
  })
  const [card, setCard] = useState({
    holder: cardHolderName,
    number: cardNumber,
    cvv: cardCVV,
    month_expire: cardMonthExpire,
    year_expire: cardYearExpire
  })
  const [paymentWithBolet, setPaymentWithBolet] = useState({
    client, 
    paymentValue
  })
  const [paymentWithCard, setPaymentWithCard] = useState({
    client,
    card,
    value: paymentValue
  })

  useEffect(() => {
    setClient({name, email, cpf})
  }, [name, email, cpf])

  useEffect(() => {
    setCard({holder: cardHolderName, number: cardNumber, cvv: cardCVV, month_expire: cardMonthExpire, year_expire: cardYearExpire})
  }, [cardHolderName, cardNumber, cardCVV, cardMonthExpire, cardYearExpire])

  useEffect(() => {
    setPaymentWithCard({
      client,
      card,
      value: paymentValue
    })
  }, [card])

  const handleCreatePayment = () => {
    console.log(paymentWithCard)
    if(paymentWith == 'card') {      
      axios.post(url, paymentWithCard)
      .then(function (response) {
        console.log(response)
      })
    }
  }

  return (
    <>

      <Body>
        <Container>
          <ClientData>
            <h1>Dados do Cliente</h1>
            <Inputs name='name' type='text' label='Nome completo:' onChange={(e: any) => setName(e.target.value)}/>
            <Inputs name='email' type='email' label='Email' onChange={(e: any) => setEmail(e.target.value)}/>
            <Inputs name='cpf' type='text' label='CPF' onChange={(e: any) => setCpf(e.target.value)}/>  
          </ClientData>
          <Divisor/>
          <PaymentData>
            <h1>R$ {paymentValue},00</h1>

          <Hr />

          <FieldSet>
            <legend>Escolha a forma de pagamento</legend>
            <div>
              <input
                type="radio"
                name="payment_form"
                value="bolet"
                onChange={() => setPaymentWith('bolet')}
                defaultChecked
                />
              <label htmlFor="payment_form">Boleto</label>
            </div>
            <div>
              <input
                type="radio"
                name="payment_form"
                value="card"
                onChange={() => setPaymentWith('card')} />
              <label htmlFor="payment_form">Cartão</label>
            </div>
          </FieldSet>

          <Hr />

            <CardForm active={paymentWith == 'card'? true : false}>
              <Inputs name='card_holder_name' type='text' label='Titular do cartão' onChange={(e: any) => setCardHolderName(e.target.value)} />
              <Inputs name='card_number' type='number' label='Número do cartão' onChange={(e: any) => setCardNumber(e.target.value)} />
              <Inputs name='card_cvv' type='number' label='CVV' onChange={(e: any) => setCardCVV(e.target.value)} />
              <Inputs name='card_mouth_expire' type='number' label='Mês de vencimento' onChange={(e: any) => setCardMonthExpire(e.target.value)} />
              <Inputs name='card_year_expire' type='number' label='Ano de vencimento' onChange={(e: any) => setCardYearExpire(e.target.value)} />
              <Hr />
            </CardForm>
          <Buttons text="Criar Pagamento" onClick={handleCreatePayment}/>  
          </PaymentData>
        </Container>
      </Body>

      {/* <Container>
        <Titulo titulo="Checkout" />
        <Form>
          
          <Hr />

          
        </Form>
      </Container> */}
    </>
  )
}

export default App
