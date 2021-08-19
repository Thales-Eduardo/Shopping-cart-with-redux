import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { api } from '../../services/api';
import { formatPrice } from '../../util/format';

import { Container } from './styles';

export class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('product');

    const DATA = response.data.map((product) => ({
      ...product,
      formatPrice: formatPrice(product.price),
    }));

    this.setState({ products: DATA });
  }

  render() {
    const { products } = this.state;
    return (
      <Container>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.formatPrice}</span>

            <button type="button">
              <div>
                <MdAddShoppingCart size={16} color="#fff" /> 3
              </div>

              <span>ADICIONAR NO CARRINHO</span>
            </button>
          </li>
        ))}
      </Container>
    );
  }
}
