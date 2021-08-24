import React from 'react';
import { connect } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, Product, PriceTotal } from './styles';

function Cart({ cart, dispatch }) {
  return (
    <Container>
      <Product>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.formatPrice}</span>
              </td>
              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline size={20} color="#42c264" />
                  </button>

                  <input type="number" readOnly value={product.amount} />

                  <button type="button">
                    <MdAddCircleOutline size={20} color="#42c264" />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$4000,80</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() =>
                    dispatch({
                      type: 'REMOVE_FROM_CART',
                      id: product.id,
                    })
                  }
                >
                  <MdDelete size={20} color="#42c264" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Product>

      <footer>
        <button type="button">Finalizar pedido(s)</button>
        <PriceTotal>
          <span>Total</span>
          <strong>R$4000,99</strong>
        </PriceTotal>
      </footer>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
