import styled from 'styled-components';

interface IProps {
  direction: 'column' | 'row';
}

const LayoutWrapper = styled.div<IProps>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === 'column' ? 'column' : 'row'};
  height: 100vh;
  min-width: 1280;
  overflow: hidden;
  position: relative;
`;

export default {
  LayoutWrapper,
};
