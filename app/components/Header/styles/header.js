import styled from 'styled-components';

const header = styled.header`
  margin-top: 40px;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 600px) {
    .wrapper {
      flex-direction: column;
    }
  }
`;

export default header;
