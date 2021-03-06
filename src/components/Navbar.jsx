import React, { Component } from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import { NavButtons, BannerPromo } from './molecules'
import CartSidebar from './CartSidebar.jsx'
import MobileSidebar from './MobileSidebar.jsx'
import { CartConsumer } from '../containers/CartContext'
import 'futura-font/styles.css'
import { graphql, StaticQuery } from 'gatsby'

const NavContainer = Styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 3;
`
class Navbar extends Component {
  state = {
    mobileSidebar: false,
    mobileDisplayFix: false,
  }

  static contextTypes = {
    firebase: PropTypes.object,
  }

  logOut = e => {
    const firebase = this.context.firebase
    firebase
      .auth()
      .signOut()
      .then(function() {
        console.log('sign out worked')
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  handleMobileSidebar = () => {
    this.setState({
      mobileSidebar: !this.state.mobileSidebar,
      mobileDisplayFix: true,
    })
  }

  render() {
    const {
      curUser,
      sidebar,
      displayFix,
      handleSidebar,
      handleBannerMargin,
    } = this.props
    const { mobileSidebar, mobileDisplayFix } = this.state
    return (
      <div>
        <StaticQuery
          query={graphql`
            {
              contentfulHomePage(pageName: { eq: "Home Page V1" }) {
                profileIcon {
                  fluid {
                    src
                  }
                }
                helpIcon {
                  fluid {
                    src
                  }
                }
                navbarItems {
                  data {
                    leftNav {
                      icon
                      dropdown
                      navButton
                      dropdownLinks {
                        name
                        route
                      }
                    }
                    rightNav {
                      icon
                      dropdown
                      navButton
                      dropdownLinks {
                        name
                        route
                      }
                    }
                  }
                }
              }
            }
          `}
          render={data => (
            <React.Fragment>
              <MobileSidebar
                display={mobileSidebar}
                handleMobileSidebar={this.handleMobileSidebar}
                logOut={this.logOut}
                curUser={curUser}
                handleSidebar={handleSidebar}
                mobileDisplayFix={mobileDisplayFix}
                navbarData={data.contentfulHomePage}
              />

              <NavContainer>
                <BannerPromo handleBannerMargin={handleBannerMargin} />
                <NavButtons
                  curUser={curUser}
                  handleMobileSidebar={this.handleMobileSidebar}
                  handleSidebar={handleSidebar}
                  logOut={this.logOut}
                  navbarData={data.contentfulHomePage}
                />
              </NavContainer>
            </React.Fragment>
          )}
        />

        <CartConsumer>
          {cartContext => (
            <CartSidebar
              cart={cartContext.cart}
              handleCart={cartContext.handleCart}
              curUser={curUser}
              display={sidebar}
              handleSidebar={handleSidebar}
              displayFix={displayFix}
            />
          )}
        </CartConsumer>
      </div>
    )
  }
}

export default Navbar
