// import styled from 'styled-components';
import styled from '@emotion/styled';

export const StyledModal = styled.div`
  // position: fixed;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${props =>
    props.specialLook ? 'rgba(255, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.5)'};
  /* width: 100vw;
     height: 100vh; */
  &:hover {
    cursor: pointer;
  }
  .modal {
    padding: 40px;
    width: 461px;
    height: 672px;
    background-color: white;
    border-radius: 24px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    &:hover {
      cursor: auto;
    }
  }

  .closeBtn {
    position: absolute;
    top: 15px;
    right: 15px;
  }
`;

export const CarPhoto = styled.img`
  display: block;
  width: 461px;
  height: 248px;
  border-radius: 14px;
`;

export const ButtonRent = styled.button`
  display: block;
  width: 168px;
  height: 44px;
  border-radius: 12px;
  background-color: #3470ff;
  color: white;
  border: none;
  margin-bottom: 40px;
  margin-top: 24px;
`;
