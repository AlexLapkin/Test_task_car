import React from 'react';
import css from './AdvertList.module.css';
import AdvertListItem from 'components/AdvertListItem/AdvertListItem';
// import PropTypes from 'prop-types';

const AdvertList = ({ adverts }) => {
  console.log(adverts);
  return (
    <ul className={css.mov_ul_title}>
      {adverts !== null &&
        adverts.map(({ id, make, model, img }) => (
          <AdvertListItem
            key={id}
            name={make}
            title={model}
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
