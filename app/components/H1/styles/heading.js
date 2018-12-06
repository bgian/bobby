import styled from 'styled-components';

const heading = styled.h1`
  font-weight: 800;
  font-size: 86px;
  color: #000000;
  letter-spacing: 0;
  line-height: 106px;

  @media (max-width: 600px) {
    font-size: 56px;
    line-height: 76px;
  }
`;

export default heading;
