import React from 'react';

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, Product, PriceTotal } from './styles';

export function Cart() {
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
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-nike-downshifter-11-masculino/26/HZM-5208-026/HZM-5208-026_detalhe1.jpg?ts=1620698712?ims=280x280"
                alt=""
              />
            </td>
            <td>
              <strong>Tênis</strong>
              <span>R$2000,40</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#42c264" />
                </button>

                <input type="number" readOnly value={1} />

                <button type="button">
                  <MdAddCircleOutline size={20} color="#42c264" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$4000,80</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#42c264" />
              </button>
            </td>
          </tr>
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
