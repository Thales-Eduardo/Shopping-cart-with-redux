import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Cart } from './styles';

export function Header() {
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
          <span>3 item</span>
        </div>
        <img
          src="https://image.flaticon.com/icons/png/512/3787/3787523.png"
          alt="carrinho"
        />
      </Cart>
    </Container>
  );
}
