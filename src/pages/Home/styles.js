import styled from 'styled-components';

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #f9f9f9;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 280px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0px 20px;
    }

    button {
      display: flex;
      align-items: center;
      background: #42c264;
      color: #f9f9f9;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      transition: filter 0.2ms;

      &:hover {
        filter: brightness(0.9);
      }
    }

    div {
      display: flex;
      align-items: center;
      padding: 12px;
      background: rgba(0, 0, 0, 0.2);

      svg {
        margin-right: 5px;
      }
    }

    > span {
      flex: 1;
      text-align: center;
      font-weight: bold;
    }
  }
`;
