import React from 'react';
import css from './AdvertList.module.css';
import AdvertListItem from 'components/AdvertListItem/AdvertListItem';
// import PropTypes from 'prop-types';

const AdvertList = ({ adverts }) => {
  // console.log(adverts);
  return (
    <ul className={css.mov_ul_title}>
      {adverts &&
        adverts.map(
          ({
            id,
            make,
            model,
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
          }) => (
            <AdvertListItem
              key={id}
              make={make}
              model={model}
              rentalPrice={rentalPrice}
              year={year}
              type={type}
              id={id}
              address={address}
              fuelConsumption={fuelConsumption}
              engineSize={engineSize}
              description={description}
              accessories={accessories}
              functionalities={functionalities}
              rentalConditions={rentalConditions}
              mileage={mileage}
              img={img}
            />
          )
        )}
    </ul>
  );
};

// MovieList.propTypes = {
//   movieList: PropTypes.array,
// };

export default AdvertList;
