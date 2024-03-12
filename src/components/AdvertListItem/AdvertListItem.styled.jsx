import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const ItemLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: rgb(14, 11, 11);
  font-weight: 500;
  height: 354px;
  border-radius: 10px;
`;

export const ItemImg = styled.img`
  display: block;
  width: 274px;
  height: 268px;
  border-radius: 14px;
  object-fit: cover;
`;

export const ItemText = styled.p`
  font-size: 16px;
`;

export const ItemTextAdd = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: rgba(18, 20, 23, 0.5);
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
`;

export const ItemTextContAdd = styled.div`
  display: flex;
  height: 24px;
  align-items: center;
  justify-content: space-between;
`;

export const ItemLi = styled.li`
  position: relative;
  border-radius: 10px;
  width: calc(25% - 20px); /* Ширина каждой карточки */
  margin-bottom: 50px; /* Пространство между карточками */
  text-align: center;
  width: 274px;
  height: 426px;
`;

export const ItemButtonLearnMore = styled.button`
  width: 274px;
  height: 44px;
  border-radius: 12px;
  color: white;
  background-color: #3470ff;
  margin-top: 28px;
  border-color: transparent;
  cursor: pointer;
`;

export const FavoriteBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--clr-brand-blue-lt);
  border: none;
  outline: none;

  &:hover svg {
    scale: 1.05;
  }
`;

export const AddFavoriteIcon = styled.svg`
  display: flex;
  justify-content: center;
  align-items: center;
  fill: #3470ff;
  stroke: #3470ff;
  width: 18px;
  height: 18px;
`;

export const RemFavoriteIcon = styled.svg`
  display: flex;
  justify-content: center;
  align-items: center;
  stroke: #fff;
  fill: none;
  width: 18px;
  height: 18px;
`;
