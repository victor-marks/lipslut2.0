import React, { Component } from 'react'
import { StyledHr } from '../atoms'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 0.5rem;
  .contents {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 1rem;
    margin-right: 3rem;
  }
  img {
    flex-basis: 20%;
    height: 3rem;
    margin: 0;
  }
  .price {
    flex-basis: 33%;
    text-align: center;
    width: 4rem;
    font-size: 0.7rem;
  }
`
class SummaryItem extends Component {
  state = {}
  render() {
    const { item, id } = this.props
    return (
      <Container>
        <div className="contents">
          <img src={item.image} alt="" />
          <div className="item-details">
            <p>{item.title}</p>
          </div>
          <p className="price">
            {item.quantity} x {item.price}
          </p>
        </div>
        <StyledHr margin="0" />
      </Container>
    )
  }
}

export default SummaryItem