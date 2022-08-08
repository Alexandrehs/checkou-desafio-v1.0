import React from 'react'

import Inputs from '../components/inputs'
import Titulo from '../components/titulo'
import {Container, Form, Hr, CardForm} from '../assets/style'
import Buttons from './components/buttons'

const Home: React.FC = () => {
    return (
        <>
            <Container>
            <Titulo titulo="Checkout" />
            <Form>
              <Inputs value={name} name='name' type='text' label='Nome completo:' onChange={(e: any) => setName(e.target.value)}/>
              <Inputs name='email' type='email' label='Email' onChange={(e: any) => setEmail(e.target.value)}/>
              <Inputs name='cpf' type='text' label='CPF' onChange={(e: any) => setCpf(e.target.value)}/>
              <Hr />

              <h1>R$ {paymentValue},00</h1>

              <Hr />

              <fieldset>
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
              </fieldset>

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
            </Form>
          </Container>
        </>
    )
}

export default Home