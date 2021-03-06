import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  background: #f9f9f9;
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #42c264;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: filter 0.2ms;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;

export const Product = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: center;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 110px;
  }

  strong {
    display: block;
    color: #333;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    button {
      background: none;
      border: 0;
      padding: 6px;
    }

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;

export const PriceTotal = styled.div`
  display: flex;
  align-items: baseline;

  gap: 10px;

  span {
    color: #999;
  }

  strong {
    font-size: 28px;
    font-weight: bold;
  }
`;
