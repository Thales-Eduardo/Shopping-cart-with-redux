import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';

import { api } from '../../services/api';
import { formatPrice } from '../../util/format';

import { Container } from './styles';

class Home extends Component {
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

  handleAddProduct = (products) => {
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      products,
    });
  };

  render() {
    const { products } = this.state;
    return (
      <Container>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.formatPrice}</span>

            <button
              type="button"
              onClick={() => this.handleAddProduct(product)}
            >
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

export default connect()(Home);
