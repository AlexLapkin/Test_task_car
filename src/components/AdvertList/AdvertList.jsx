import React from 'react';
import { AdvertUl } from './AdvertList.styled';
import AdvertListItem from 'components/AdvertListItem/AdvertListItem';

const AdvertList = ({ adverts }) => {
  return (
    <AdvertUl>
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
            rentalCompany,
            mileage,
          }) => (
            <AdvertListItem
              adverts={adverts}
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
              rentalCompany={rentalCompany}
              mileage={mileage}
              img={img}
            />
          )
        )}
    </AdvertUl>
  );
};

export default AdvertList;
