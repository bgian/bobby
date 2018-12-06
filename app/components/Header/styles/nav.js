import styled from 'styled-components';

const nav = styled.ul`
  flex: 1;
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin-right: 80px;

    a {
      font-weight: 400;
      font-size: 20px;
      color: rgba(0, 0, 0, 0.5);
      letter-spacing: 0;
      text-decoration: none;
      transition: color 0.2s ease-in-out;

      &:hover {
        color: #000;
      }
    }

    &:last-child {
      margin-right: 0px;
    }
  }

  &:last-child {
    justify-content: flex-end;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export default nav;
