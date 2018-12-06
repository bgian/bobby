import styled from 'styled-components';

const small = styled.small`
  font-weight: 400;
  font-size: 16px;
  color: #828282;
  letter-spacing: 0;
  line-height: normal;

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

export default small;
