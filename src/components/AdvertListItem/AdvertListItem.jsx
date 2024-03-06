import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import css from './AdvertListItem.module.css';
// import PropTypes from 'prop-types';

const AdvertListItem = ({ make, model, id, img }) => {
  const location = useLocation();

  return (
    <li className={css.mov_item} key={id}>
      <NavLink
        className={css.mov_title}
        to={`/adverts/${id}`}
        state={{ from: location }}
      >
        <img className={css.mov_title_img} src={img} alt="" />
        <p className={css.mov_text}>{make}</p>
      </NavLink>
    </li>
  );
};

// MovieListItem.propTypes = {
//   title: PropTypes.string,
//   name: PropTypes.string,
//   id: PropTypes.number,
// };

export default AdvertListItem;
