import AdvertList from '../../components/AdvertList/AdvertList';
import {
  getAllAdverts,
  getAllOfAdverts,
} from '../../redux/adverts/adverts.operations';
import { selectAdverts } from '../../redux/adverts/adverts.selectors';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from '../../components/Container/Container';
import SearchBar from 'components/SearchBar/SearchBar';
import ButtonLoadMore from 'components/ButtonLoadMore/ButtonLoadMore';
import ModalCar from 'components/ModalCar/ModalCar';
// import { Loader } from './../../components/Loader/Loader';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(state => selectAdverts(state));
  const [allAdverts, setAllAdverts] = useState([]);
  const [page, setPage] = useState(1);
  // const [onClick, setOnClick] = useState(false);
  // const page = useSelector(state => state.adverts.page);
  console.log(page);
  const limit = 12;

  const isOpenModal = useSelector(state => state.modal.isOpenModal);

  const onClickLoadMore = () => {
    setPage(page + 1);
    if (page > 1) {
      setAllAdverts(prevAdverts => [...prevAdverts, ...adverts]);
    }
  };

  useEffect(() => {
    dispatch(getAllAdverts({ limit: limit, page: page }));
  }, [dispatch, page]);

  useEffect(() => {
    if (page === 1) {
      setAllAdverts(adverts);
    }
  }, [adverts, page]);

  useEffect(() => {
    dispatch(getAllOfAdverts({ limit: limit, page: page }));
  }, [dispatch, page]);

  return (
    <Container>
      {allAdverts && (
        <>
          <SearchBar />
          {/* <SearchBar onSubmit={formSubmit} /> */}
          <AdvertList adverts={allAdverts} />
          {allAdverts.length < 36 && (
            <ButtonLoadMore onClickLoadMore={onClickLoadMore} />
          )}
        </>
      )}
      {isOpenModal && <ModalCar />}
    </Container>
  );
};

export default CatalogPage;
