import styled from 'styled-components';

const wrapper = styled.div`
  width: 100%;
  max-width: ${props => props.maxWidth ? props.maxWidth + 'px' : '1240px'};
  margin: 0px ${props => props.maxWidth ? '0' : 'auto'};
  padding: 0px ${props => props.maxWidth ? 0 : '20px'};
`;

export default wrapper;
