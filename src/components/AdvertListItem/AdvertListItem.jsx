import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from 'redux/modal/modalSlice';
import {
  ItemLi,
  ItemLink,
  ItemImg,
  ItemText,
  ItemTextCont,
  ItemTextContAdd,
  ItemButtonLearnMore,
  FavoriteBtn,
  FavoriteIcon,
} from './AdvertListItem.styled';
import {
  selectFavoriteAdverts,
  selectAllAdverts,
} from 'redux/adverts/adverts.selectors';
import { addToFavorites, removeFromFavorites } from 'redux/adverts/advertSlice';
// import { getAdvertById } from 'redux/adverts/adverts.operations';
import icons from './../../images/icons.svg';
import { nanoid } from 'nanoid';

const AdvertListItem = ({
  make,
  model,
  id,
  img,
  rentalPrice,
  year,
  type,
  address,
  fuelConsumption,
  engineSize,
  description,
  accessories,
  functionalities,
  rentalConditions,
  mileage,
}) => {
  // const location = useLocation();
  const dispatch = useDispatch();
  const favoriteAdverts = useSelector(state => selectFavoriteAdverts(state));
  const adverts = useSelector(state => selectAllAdverts(state));

  const handleClickToFavorite = () => {
    const favoriteItem = adverts.find(item => item.id === id);

    const isFavorite = favoriteAdverts.includes(favoriteItem);
    if (isFavorite) {
      dispatch(removeFromFavorites(favoriteItem));
      return;
    }
    dispatch(addToFavorites(favoriteItem));
    console.log(favoriteAdverts);
  };

  return (
    <ItemLi key={id}>
      {/* <ItemLink to={`/adverts/${id}`} state={{ from: location }}> */}
      <ItemImg src={img} alt="car" />
      <FavoriteBtn type="button" onClick={() => handleClickToFavorite()}>
        <FavoriteIcon
        // isFavorite={handleIsFavorite(favorites, item)}
        >
          <use href={icons + '#icon-heart'} />
        </FavoriteIcon>
      </FavoriteBtn>
      <ItemTextCont>
        <ItemTextContAdd>
          <ItemText>{make}</ItemText>
          <ItemText>{model}</ItemText>
          <ItemText>{year}</ItemText>
          <ItemText>{rentalPrice}</ItemText>
        </ItemTextContAdd>

        <ItemTextContAdd>
          <ItemText>{make}</ItemText>
          <ItemText>{rentalPrice}</ItemText>
          <ItemText>{rentalPrice}</ItemText>
          <ItemText>{rentalPrice}</ItemText>
        </ItemTextContAdd>
        <ItemTextContAdd>
          <ItemText>{type}</ItemText>
          <ItemText>{model}</ItemText>
          <ItemText>{id}</ItemText>
          <ItemText>{rentalPrice}</ItemText>
        </ItemTextContAdd>
      </ItemTextCont>
      {/* <p className={css.mov_text}>{model}</p> */}
      {/* </ItemLink> */}
      <ItemButtonLearnMore
        onClick={() =>
          dispatch(
            openModal({
              make,
              model,
              id,
              img,
              rentalPrice,
              year,
              type,
              address,
              fuelConsumption,
              engineSize,
              description,
              accessories,
              functionalities,
              rentalConditions,
              mileage,
            })
          )
        }
        type="button"
      >
        Learn more
      </ItemButtonLearnMore>
    </ItemLi>
  );
};

export default AdvertListItem;
