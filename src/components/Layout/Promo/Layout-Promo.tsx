import styled from 'styled-components';

import promo from 'assets/img/promo.png';

const LayoutPromo = styled.div`
  flex: 1 1 0%;
  min-width: 481px;
  background-color: rgb(12, 30, 44);
  background-image: url(${promo});
  background-size: cover;
  top: 0px;
  left: 0px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;

export default LayoutPromo;
