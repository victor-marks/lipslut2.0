import React, { Component } from 'react'
import styled from 'styled-components'
import { StyledHr } from '../atoms'
import SidebarItem from './SidebarItem'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  hr {
    width: 250%;
  }
`

class CartSidebarBody extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { removeItem, cart, handleAdjust } = this.props
    const items = cart.map((item, i) => (
      <SidebarItem
        item={item}
        handleAdjust={handleAdjust}
        removeItem={removeItem}
        id={i}
        key={i}
      />
    ))
    return (
      <Container>
        {cart.length > 0 ? (
          items
        ) : (
          <p>
            nothing here.....yet<br />shop now!
          </p>
        )}
        <StyledHr />
      </Container>
    )
  }
}

export default CartSidebarBody
