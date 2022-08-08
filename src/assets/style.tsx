import styled from 'styled-components'

interface CardFormProps {
  active: boolean
}

const Container = styled.div `
    display: grid;
    height: 100vh;
    grid-template-rows: 1fr;
    grid-template-areas:
        "clientData divisor paymentData";
    grid-gap: 0.35rem;
    align-items: center;
`

const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Divisor = styled.div`
    grid-area: divisor;
    width: 1px;
    height: 300px;
    background-color: #999;
    border: 1px solid #999;
    border-radius: 10px;
`

const ClientData = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: clientData;
    width: 100wh;
    height: 100hv;
    padding: 15px;
`

const PaymentData = styled.div`
    grid-area: paymentData;
    width: 100wh;
    height: 100hv;
    padding: 15px;
`

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Hr = styled.hr`
  width: 400px;
  border-top: 1px solid #999;
  margin-top: 20px;
`

const CardForm = styled.div<CardFormProps>`
  flex-direction: column;
  justify-content: center;
  display: ${props => props.active ? 'flex' : 'none'}
`

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: #f1f1f1;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`

const Button = styled.button`
  background: blue;
  border-radius: 10px;
  border: 2px solid blue;
  color: white;
  margin: 0 1em;
  padding: 0.25em 1em;  
`

const FieldSet = styled.fieldset`
  display: flex;
  flex-wrap: wrap;
`

export {Container, Form, Hr, CardForm, ClientData, PaymentData, Body, Divisor, Input, Button, FieldSet}