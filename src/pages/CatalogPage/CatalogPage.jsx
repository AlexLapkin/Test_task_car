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
  const [filterAdverts, setFilterAdverts] = useState();

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

  const filteredAdverts = [];
  if (filterAdverts) {
    filteredAdverts.push(filterAdverts);
  }

  return (
    <Container>
      {allAdverts && (
        <>
          <SearchBar
            filterAdverts={filterAdverts}
            setFilterAdverts={setFilterAdverts}
          />
          {filteredAdverts.length > 0 ? (
            <AdvertList adverts={filteredAdverts} />
          ) : (
            <AdvertList adverts={allAdverts} />
          )}
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
