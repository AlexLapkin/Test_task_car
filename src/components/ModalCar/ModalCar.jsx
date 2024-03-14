import React, { useEffect } from 'react';

import {
  StyledModal,
  UlText,
  UlTextAdd,
  CarPhoto,
  ButtonRent,
  TextTitle,
  TextAdd,
  TextSubTitle,
  TextSubTitleAdd,
  TextAdded,
  ContAdd,
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
        <CarPhoto src={modalData.img} alt="photo"></CarPhoto>
        <div>
          <h3 className="text_title">
            {modalData.make} {modalData.model}, {modalData.year}
          </h3>
          <UlText>
            <li className="text_add">
              {modalData.address.slice(modalData.address.indexOf(',') + 2)}
            </li>
            <li className="text_add">id: {modalData.id}</li>
            <li className="text_add">Year: {modalData.year}</li>
            <li className="text_add">Type: {modalData.type}</li>
            <li className="text_add">
              Fuel Consumption: {modalData.fuelConsumption} Engine Size:
              {modalData.engineSize}
            </li>
          </UlText>

          <ContAdd>
            <p className="text_subtitle">{modalData.description}</p>
            <p className="text_subtitle_add">
              Accessories and functionalities:
            </p>
            <ul className="ul_text_add">
              <li className="text_subtitle_added">
                {modalData.accessories[0]}
              </li>
              <li className="text_subtitle_added">
                {modalData.accessories[1]}{' '}
              </li>
              <li className="text_subtitle_added">
                {' '}
                {modalData.accessories[2]}
              </li>
              <li className="text_subtitle_added">
                {modalData.functionalities[0]}
              </li>
              <li className="text_subtitle_added">
                {modalData.functionalities[1]}
              </li>
              <li className="text_subtitle_added">
                {modalData.functionalities[2]}
              </li>
            </ul>
            <li className="text_subtitle_add">Rental conditions:</li>
            <li className="text_added">
              Minimum age:25 Valid driver's license
            </li>
            <li className="text_added">
              Security deposite required Mileage: {modalData.mileage} Price:{' '}
              {modalData.rentalPrice}
            </li>
          </ContAdd>

          <ButtonRent href="tel:+380730000000">Rental car</ButtonRent>
        </div>
      </div>
    </StyledModal>
  );
};

export default ModalCar;
