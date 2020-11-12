import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  width: 400px;
  height: 100%;
  top: 0;
  right: 0;
  position: absolute;
  z-index: 9005;
  background: white;
`;

const FormWrapper = styled.div`
  padding: 32px;
  & .Message {
    margin-bottom: 24px;
  }
`;

const Note = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 56px 0;
  color: #999;
  --text-color: #999;
  & .Icon {
    margin: 0 8px 0 0;
  }
  & .Text {
  }
`;

export default {
  FormWrapper,
  Note,
  Wrapper,
};
