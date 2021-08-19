import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Container, Cart } from './styles';

function Header({ cart }) {
  console.log(cart.length);
  return (
    <Container>
      <Link to="/">
        <img
          src="https://image.flaticon.com/icons/png/512/3787/3787416.png"
          alt="logo"
        />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cart.length} item</span>
        </div>
        <img
          src="https://image.flaticon.com/icons/png/512/3787/3787523.png"
          alt="carrinho"
        />
      </Cart>
    </Container>
  );
}

export default connect((state) => ({
  cart: state.cart,
}))(Header);
