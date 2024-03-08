import React from 'react';
import css from './AdvertList.module.css';
import AdvertListItem from 'components/AdvertListItem/AdvertListItem';
// import PropTypes from 'prop-types';

const AdvertList = ({ adverts }) => {
  // console.log(adverts);
  return (
    <ul className={css.mov_ul_title}>
      {adverts &&
        adverts.map(({ id, make, model, img, rentalPrice, year, type }) => (
          <AdvertListItem
            key={id}
            make={make}
            model={model}
            rentalPrice={rentalPrice}
            year={year}
            type={type}
            id={id}
            img={img}
          />
        ))}
    </ul>
  );
};

// MovieList.propTypes = {
//   movieList: PropTypes.array,
// };

export default AdvertList;
