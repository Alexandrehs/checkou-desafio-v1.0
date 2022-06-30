import styled from 'styled-components'

interface CardFormProps {
  active: boolean
}

const Container = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
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

export {Container, Form, Hr, CardForm}