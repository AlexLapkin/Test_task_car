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

export const Cont = styled.div`
  .text_title {
    font-weight: 500;
    font-size: 18px;
    line-height: 133 %;
    color: #121417;
    list-style: none;
    margin-top: 14px;
    margin-bottom: 8px;
  }
  .text_span {
    color: #3470ff;
  }
`;

export const UlText = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px 14px;
  width: 461px;

  .text_add {
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: rgba(18, 20, 23, 0.5);
    list-style: none;
    position: relative;
    list-style: none;
  }

  .text_add:not(:last-child)::after {
    content: '|';
    position: absolute;
    right: -7px;
  }
`;

export const ContAdd = styled.div`
  width: 461px;

  .text_subtitle {
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    color: #121417;
    list-style: none;
    padding-left: 0px;
  }
  .text_subtitle_add {
    font-weight: 500;
    font-size: 14px;
    line-height: 143%;
    color: #121417;
    list-style: none;
    margin-top: 14px;
    margin-bottom: 8px;
    padding-left: 0px;
  }
  .ul_text_add {
    padding-left: 0px;
    display: flex;
    flex-wrap: wrap;
    gap: 4px 14px;
    width: 461px;
  }
  .text_subtitle_added {
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: rgba(18, 20, 23, 0.5);
    list-style: none;
    position: relative;
  }
  .text_subtitle_added:not(:last-child)::after {
    content: '|';
    position: absolute;
    right: -7px;
  }
  .text_added {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 14px;
    padding-right: 14px;
    height: 32px;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    border-radius: 35px;
    color: #363535;
    background-color: #f9f9f9;
    list-style: none;
  }
  .text_added_span {
    font-weight: 600;
    color: #3470ff;
  }
  .ul_adding {
    display: flex;
    padding-left: 0px;
    gap: 8px;
    margin-top: 8px;
    margin-bottom: 0px;
  }
  .ul_adding_one {
    display: flex;
    padding-left: 0px;
    gap: 8px;
    margin-top: 8px;
  }
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
