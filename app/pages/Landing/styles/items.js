import styled from 'styled-components';

const items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  opacity: 0;

  @media (max-width: 600px) {
    margin: 0px;
  }

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

export default items;
