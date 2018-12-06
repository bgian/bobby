import styled from 'styled-components';

const hero = styled.div`
  padding: 160px 0px;

  a {
  	font-size: 22px;
  	color: #7F7F7F;
  	transition: color 0.2s ease-in-out;
  }

  a:hover {
  	color: #111111;
  }

  @media (max-width: 600px) {
  	h1 {
  		font-size: 50px;
  	}
  }
`;

export default hero;
