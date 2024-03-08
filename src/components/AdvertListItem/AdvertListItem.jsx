import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openModal } from 'redux/modal/modalSlice';
import css from './AdvertListItem.module.css';

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
  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <li className={css.mov_item} key={id}>
      <NavLink
        className={css.mov_title}
        to={`/adverts/${id}`}
        state={{ from: location }}
      >
        <img className={css.mov_title_img} src={img} alt="" />
        <div className={css.adv_text_cont}>
          <div className={css.adv_text_cont_add}>
            <p className={css.mov_text}>{make}</p>
            <p className={css.mov_text}>{model}</p>
            <p className={css.mov_text}>{year}</p>
            <p className={css.mov_text}>{rentalPrice}</p>
          </div>
          <div className={css.adv_text_cont_add}>
            <p className={css.mov_text}>{make}</p>
            <p className={css.mov_text}>{rentalPrice}</p>
            <p className={css.mov_text}>{rentalPrice}</p>
            <p className={css.mov_text}>{rentalPrice}</p>
          </div>
          <div className={css.adv_text_cont_add}>
            <p className={css.mov_text}>{type}</p>
            <p className={css.mov_text}>{model}</p>
            <p className={css.mov_text}>{id}</p>
            <p className={css.mov_text}>{rentalPrice}</p>
          </div>
        </div>
        {/* <p className={css.mov_text}>{model}</p> */}
      </NavLink>
      <button
        onClick={() =>
          dispatch(
            openModal({
              make,
              model,
              year,
              address,
              id,
              type,
              fuelConsumption,
              engineSize,
              description,
              accessories,
              functionalities,
              rentalConditions,
              mileage,
              rentalPrice,
              img,
            })
          )
        }
        type="button"
        className={css.btn_learn_more}
      >
        Learn more
      </button>
    </li>
  );
};

export default AdvertListItem;
