import React, { useEffect } from 'react';

import { StyledModal, CarPhoto, ButtonRent } from './ModalCar.styled';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from 'redux/modal/modalSlice';
import { selectModalData } from 'redux/modal/modal.selectors';

const ModalCar = () => {
  const modalData = useSelector(selectModalData);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        dispatch(closeModal());
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [dispatch]);

  const handleOverayClick = event => {
    if (event.target === event.currentTarget) {
      dispatch(closeModal());
    }
  };

  return (
    <StyledModal onClick={handleOverayClick}>
      <div className="modal">
        <button onClick={() => dispatch(closeModal())} className="closeBtn">
          ❌
        </button>
        <div>
          <CarPhoto src={modalData.img} alt="photo"></CarPhoto>
          <h3>
            {modalData.make} {modalData.model}, {modalData.year}
          </h3>
          <p>
            {modalData.address.slice(modalData.address.indexOf(',') + 2)} id:{' '}
            {modalData.id} Year: {modalData.year} Type: {modalData.type}
          </p>
          <p>
            Fuel Consumption: {modalData.fuelConsumption} Engine Size:{' '}
            {modalData.engineSize}
          </p>

          <p>{modalData.description}</p>
          <p>
            Accessories and functionalities: {modalData.accessories}
            {modalData.functionalities}
          </p>
          <p>Rental conditions: Minimum age:25 Valid driver's license</p>
          <p></p>
          <p>
            Security deposite required Mileage: {modalData.mileage} Price:{' '}
            {modalData.rentalPrice}
          </p>
          {/* <p>Mileage: {modalData.mileage}</p> */}
          {/* <p>Price: {modalData.rentalPrice}</p> */}
          <ButtonRent>Rental car</ButtonRent>
        </div>
      </div>
    </StyledModal>
  );
};

export default ModalCar;
