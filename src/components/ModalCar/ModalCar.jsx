import React, { useEffect } from 'react';

import {
  StyledModal,
  UlText,
  CarPhoto,
  ButtonRent,
  TextTitle,
  TextAdd,
  TextSubTitle,
  TextSubTitleAdd,
  TextAdded,
  IconClose,
  BtnClose,
} from './ModalCar.styled';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from 'redux/modal/modalSlice';
import { selectModalData } from 'redux/modal/modal.selectors';
import icons from './../../images/icons.svg';

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
        <BtnClose onClick={() => dispatch(closeModal())} className="closeBtn">
          <IconClose>
            <use href={icons + '#icon-close'} />
          </IconClose>
        </BtnClose>
        <div>
          <CarPhoto src={modalData.img} alt="photo"></CarPhoto>
          <UlText>
            <TextTitle>
              {modalData.make} {modalData.model}, {modalData.year}
            </TextTitle>
            <TextAdd>
              {modalData.address.slice(modalData.address.indexOf(',') + 2)} id:{' '}
              {modalData.id} Year: {modalData.year} Type: {modalData.type}
            </TextAdd>
            <TextAdd>
              Fuel Consumption: {modalData.fuelConsumption} Engine Size:{' '}
              {modalData.engineSize}
            </TextAdd>

            <TextSubTitle>{modalData.description}</TextSubTitle>
            <TextSubTitleAdd>Accessories and functionalities:</TextSubTitleAdd>
            <TextAdd>
              {modalData.accessories}
              {modalData.functionalities}
            </TextAdd>
            <TextSubTitleAdd>Rental conditions: </TextSubTitleAdd>
            <TextAdded>Minimum age:25 Valid driver's license</TextAdded>
            <TextAdded>
              Security deposite required Mileage: {modalData.mileage} Price:{' '}
              {modalData.rentalPrice}
            </TextAdded>
          </UlText>
          <ButtonRent href="tel:+380730000000">Rental car</ButtonRent>
        </div>
      </div>
    </StyledModal>
  );
};

export default ModalCar;
