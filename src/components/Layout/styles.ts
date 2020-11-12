import styled from 'styled-components';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-width: 1280;
  overflow: hidden;
  position: relative;

  & .LayoutHeader {
    z-index: 30;
    & + .LayoutPanels {
      top: 48px;
    }
  }

  & .LayoutPanels {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    min-width: 464px;

    & .Block {
      border: none;
      border-radius: none;
      width: 100%;
      min-width: auto;
    }
  }
`;

export default {
  LayoutWrapper,
};
