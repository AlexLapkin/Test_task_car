import styled from '@emotion/styled';

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${props =>
    props.specialLook ? 'rgba(255, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.5)'};

  &:hover {
    cursor: pointer;
  }
  .modal {
    padding: 40px;
    width: 461px;
    // height: 672px;
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
  object-fit: cover;
`;

export const ButtonRent = styled.a`
  display: flex;
  width: 168px;
  height: 44px;
  border-radius: 12px;
  background-color: #3470ff;
  text-decoration: none;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: white;
  border: none;
  margin-top: 24px;
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 143%;
`;

export const UlText = styled.ul`
  padding-left: 0px;
`;

export const TextTitle = styled.li`
  font-weight: 500;
  font-size: 18px;
  line-height: 133%;
  color: #121417;
  list-style: none;
  margin-top: 14px;
  margin-bottom: 8px;
`;

export const TextAdd = styled.li`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(18, 20, 23, 0.5);
  list-style: none;
  // margin-top: 4px;
`;

export const TextSubTitle = styled.li`
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  color: #121417;
  list-style: none;
  margin-top: 14px;
  margin-bottom: 24px;
`;

export const TextSubTitleAdd = styled.li`
  font-weight: 500;
  font-size: 14px;
  line-height: 143%;
  color: #121417;
  list-style: none;
  margin-top: 24px;
  margin-bottom: 8px;
`;

export const TextAdded = styled.li`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(18, 20, 23, 0.5);
  list-style: none;
  margin-top: 15px;
  padding-left: 14px;
`;

export const IconClose = styled.svg`
  width: 18px;
  height: 18px;
  stroke: black;
  fill: none;
`;

export const BtnClose = styled.button`
  width: 24px;
  height: 24px;
  background-color: white;
  border: none;
`;
