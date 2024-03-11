import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const ItemLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  /*--justify-content: center;--*/
  align-items: center;
  text-decoration: none;
  color: rgb(14, 11, 11);
  font-weight: 500;
  height: 354px;
  border-radius: 10px;
  /* box-shadow: 
    0px 1px 10px 0px rgba(0, 0, 0, 0.3);  */
  /* border: 1px solid blue; */
`;

export const ItemImg = styled.img`
  display: block;
  /* margin-top: 25px; */
  width: 274px;
  height: 268px;
  border-radius: 14px;
  object-fit: cover;
  /* border: 1px solid red; */
`;

export const ItemText = styled.p`
  font-size: 16px;
  /* padding-left: 30px;
    padding-right: 30px; */
  /* text-align: justify; */
  //   border: 1px solid red;
`;

export const ItemTextAdd = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: rgba(18, 20, 23, 0.5);
  /* padding-left: 30px;
    padding-right: 30px; */
  /* text-align: justify; */
  //   border: 1px solid red;
`;

export const ItemTextCont = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  width: 274px;
  height: 72px;
  margin-top: 14px;
  padding-top: 0;
  padding-bottom: 0;
  //   border: 1px solid blue;
`;

export const ItemTextContAdd = styled.div`
  display: flex;
  height: 24px;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid green; */
`;

export const ItemLi = styled.li`
  position: relative;
  border-radius: 10px;
  width: calc(25% - 20px); /* Ширина каждой карточки */
  margin-bottom: 50px; /* Пространство между карточками */
  text-align: center;
  width: 274px;
  height: 426px;
  /* border: 1px solid green; */
`;

export const ItemButtonLearnMore = styled.button`
  width: 274px;
  height: 44px;
  border-radius: 12px;
  color: white;
  background-color: #3470ff;
  margin-top: 28px;
  border-color: transparent;
`;

export const FavoriteBtn = styled.button`
  position: absolute;
  // position: relative;
  top: 14px;
  right: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--clr-brand-blue-lt);
  border: none;
  outline: none;
  z-index: 2;
  //   border: 1px solid red;

  &:hover svg {
    scale: 1.05;
  }
`;

export const FavoriteIcon = styled.svg`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 18px;
  height: 18px;
`;
