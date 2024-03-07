import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import css from './AdvertListItem.module.css';
// import PropTypes from 'prop-types';

const AdvertListItem = ({ make, model, id, img, rentalPrice, year }) => {
  const location = useLocation();

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
            <p className={css.mov_text}>{make}</p>
            <p className={css.mov_text}>{rentalPrice}</p>
            <p className={css.mov_text}>{rentalPrice}</p>
            <p className={css.mov_text}>{rentalPrice}</p>
          </div>
        </div>
        {/* <p className={css.mov_text}>{model}</p> */}
      </NavLink>
      <button className={css.btn_learn_more}>Learn more</button>
    </li>
  );
};

// MovieListItem.propTypes = {
//   title: PropTypes.string,
//   name: PropTypes.string,
//   id: PropTypes.number,
// };

export default AdvertListItem;
