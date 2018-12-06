import styled from 'styled-components';

const item = styled.div`
  margin-bottom: 80px;
  width: 48%;
  max-width: 580px;

  img {
    width: 100%;
  }

  /* &:nth-child(even) {
    margin-right: 0px;
  } */

  @media (max-width: 600px) {
    width: 100% !important;
    margin: 0px 0px 30px 0px;
  }
`;

export default item;
