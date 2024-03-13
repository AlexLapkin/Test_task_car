import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from 'redux/modal/modalSlice';
import {
  ItemLi,
  ItemImg,
  ItemTextCont,
  ItemButtonLearnMore,
  FavoriteBtn,
  AddFavoriteIcon,
  RemFavoriteIcon,
} from './AdvertListItem.styled';
import {
  selectFavoriteAdverts,
  selectAllAdverts,
} from 'redux/adverts/adverts.selectors';
import { addToFavorites, removeFromFavorites } from 'redux/adverts/advertSlice';
import icons from './../../images/icons.svg';
import Notiflix from 'notiflix';

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
  rentalCompany,
  mileage,
}) => {
  const dispatch = useDispatch();
  const favoriteAdverts = useSelector(state => selectFavoriteAdverts(state));
  const allAdverts = useSelector(state => selectAllAdverts(state));
  const isToFav = useSelector(state =>
    state.advertStore.favoriteAdverts.some(item => item.id === id)
  );

  const handleClickToFavorite = item => {
    const favoriteItem = allAdverts.find(item => item.id === id);

    const isFavorite = favoriteAdverts.some(item => item.id === id);
    if (isFavorite) {
      dispatch(
        removeFromFavorites(favoriteItem),
        Notiflix.Notify.info(
          `Advert ${make} ${model} is removed from Favorites!`,
          {
            position: 'right-top',
            timeout: 3000,
          }
        )
      );
    } else {
      dispatch(
        addToFavorites(favoriteItem),
        Notiflix.Notify.success(`Advert ${make} ${model}  add to Favorites!`, {
          position: 'right-top',
          timeout: 3000,
        })
      );
    }
    return isFavorite;
  };

  return (
    <ItemLi key={id}>
      <ItemImg src={img} alt="car" />
      <FavoriteBtn type="button" onClick={() => handleClickToFavorite()}>
        {isToFav ? (
          <AddFavoriteIcon>
            <use href={icons + '#icon-heart'} />
          </AddFavoriteIcon>
        ) : (
          <RemFavoriteIcon>
            <use href={icons + '#icon-heart'} />
          </RemFavoriteIcon>
        )}
      </FavoriteBtn>
      <ItemTextCont>
        <div className="subtitle">
          <h3 className="text_subtitle">
            {make} <span className="text_span">{model}</span>, {year}
          </h3>
          <h3 className="text_subtitle">{rentalPrice}</h3>
        </div>
        <ul className="ul_text">
          <li className="li_text">{address.slice(address.indexOf(',') + 2)}</li>
          <li className="li_text">
            {rentalCompany.split(' ').slice(0, 2).join(' ')}
          </li>
          <li className="li_text">Premium</li>
          <li className="li_text">{type}</li>
          <li className="li_text">{make}</li>
          <li className="li_text">{id}</li>
          <li className="li_text">
            {accessories[0].split(' ').slice(0, 1).join(' ')}
          </li>
        </ul>
      </ItemTextCont>

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
