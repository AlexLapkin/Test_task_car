import AdvertList from '../../components/AdvertList/AdvertList';
import { getAllAdverts } from '../../redux/adverts/adverts.operations';
import { selectAllAdverts } from '../../redux/adverts/adverts.selectors';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from '../../components/Container/Container';
import SearchBar from 'components/SearchBar/SearchBar';
// import { Wrapper } from 'components/SearchBar/SearchBar.styled';
import { PageWrapper } from './CatalogPage.styled';
import ButtonLoadMore from 'components/ButtonLoadMore/ButtonLoadMore';
import ModalCar from 'components/ModalCar/ModalCar';
// import SearchButton from 'components/SearchBar/SearchButton';
// import adverts from './../../helpers/adsCars.json';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(state => selectAllAdverts(state));
  const limit = 12;
  const [allAdverts, setAllAdverts] = useState([]);
  const [page, setPage] = useState(1);

  const isOpenModal = useSelector(state => state.modal.isOpenModal);

  const onClickLoadMore = () => {
    setPage(prevState => prevState + 1);
    // setAllAdverts(prevAdverts => [...prevAdverts, ...adverts]);
  };

  useEffect(() => {
    dispatch(getAllAdverts({ limit: limit, page: page }));
  }, [dispatch, page]);

  useEffect(() => {
    setAllAdverts(prevAdverts => [...prevAdverts, ...adverts]);
  }, [adverts]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await dispatch(getAllAdverts({ limit: limit, page: page }));
  //     setAllAdverts(prevAdverts => [...prevAdverts, ...adverts]);
  //   };
  //   fetchData();
  // }, [dispatch, page]);

  // useEffect(() => {
  //   dispatch(getAllAdverts({ limit: limit, page: page })).then(() =>
  //     setAllAdverts(prevAdverts => [...prevAdverts, ...adverts])
  //   );
  // }, [dispatch, page]);

  console.log(allAdverts);
  //
  return (
    <Container>
      <PageWrapper>
        {adverts && (
          <>
            <SearchBar />
            {/* <SearchBar onSubmit={formSubmit} /> */}
            <AdvertList adverts={allAdverts} />
            <ButtonLoadMore onClickLoadMore={onClickLoadMore} />
          </>
        )}
        {isOpenModal && <ModalCar />}
      </PageWrapper>
    </Container>
  );
};

export default CatalogPage;
