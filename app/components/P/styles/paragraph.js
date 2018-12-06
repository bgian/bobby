import styled from 'styled-components';

const paragraph = styled.p`
  font-weight: 400;
  font-size: ${props => props.small ? '22px' : '28px'};
  color: ${props => props.light ? '#7F7F7F' : '#000'};
  letter-spacing: 0;
  line-height: ${props => props.small ? '34px' : '42px'};
  margin-top: 0px;
  margin-bottom: ${props => props.bottom === undefined ? 36 : props.bottom}px;

  ${props => props.smallest && `
    font-size: 18px;
    line-height: 28px;
  `}
`;

export default paragraph;
