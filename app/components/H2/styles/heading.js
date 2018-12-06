import styled from 'styled-components';

const heading = styled.h2`
  font-weight: 600;
  font-size: 26px;
  color: #000000;
  letter-spacing: 0;
  line-height: 31px;
  margin: 0 0 60px 0;

  ${props => props.opacity && 'opacity: 0;'};

  ${props =>
    props.animate &&
    `
  -webkit-backface-visibility: hidden;
  animation-name: fadeInUp;
  animation-duration: .5s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
`};
`;

export default heading;
