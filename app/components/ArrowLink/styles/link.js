import styled from 'styled-components';

const link = styled.a`
  position: relative;
  display: inline-flex;
  font-size: ${props => (props.large ? '40px' : '20px')};
  color: ${props => (props.light ? '#828282' : '#000')};
  letter-spacing: 0;
  line-height: 30px;
  padding-bottom: ${props => (props.large ? '15px' : '2px')};
  text-decoration: none;
  border-bottom: ${props => (props.large ? '2px' : '1px')} solid rgba(0, 0, 0, .1);
  align-items: center;
  margin-bottom: ${props => props.bottom || 0}px;

  &:before {
    content: '';
    position: absolute;
    bottom: ${props => (props.large ? '-2px' : '-1px')};
    left: 0px;
    width: 0%;
    height: ${props => (props.large ? '2px' : '1px')};
    background: #000;
    transition: width 0.2s ease-in-out;
  }

  &:hover {
    &:before {
      width: 100%;
    }
  }
`;

export default link;
