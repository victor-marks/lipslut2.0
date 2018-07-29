import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ alignItems }) => alignItems || 'center'};
  padding: 3rem;
  box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, 0.2);
  background: white;
  border-radius: 6px;
  width: 400px;
  height: 70vh;
  width: ${({ width }) => width};
  .StripeElement {
    width: 17rem;
  }
`
export default Card
