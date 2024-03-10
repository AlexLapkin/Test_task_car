import { Container } from '../../components/Container/Container';
import { FavoriteWrapper } from './FavoriteAdvertPage.styled';
import { useSelector } from 'react-redux';
import { selectFavoriteAdverts } from 'redux/adverts/adverts.selectors';
import AdvertList from './../../components/AdvertList/AdvertList';
import ModalCar from '../../components/ModalCar/ModalCar';

const FavoriteAdvertPage = () => {
  const favoriteAdverts = useSelector(state => selectFavoriteAdverts(state));
  const isOpenModal = useSelector(state => state.modal.isOpenModal);
  return (
    <Container>
      <FavoriteWrapper>
        {favoriteAdverts && (
          <>
            <AdvertList adverts={favoriteAdverts} />
          </>
        )}
        {isOpenModal && <ModalCar />}
      </FavoriteWrapper>
    </Container>
  );
};

export default FavoriteAdvertPage;
