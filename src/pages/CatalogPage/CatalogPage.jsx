import AdvertList from '../../components/AdvertList/AdvertList';
import { getAllAdverts } from '../../redux/adverts/adverts.operations';
import { selectAdverts } from '../../redux/adverts/adverts.selectors';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from '../../components/Container/Container';
import SearchBar from 'components/SearchBar/SearchBar';
import ButtonLoadMore from 'components/ButtonLoadMore/ButtonLoadMore';
import ModalCar from 'components/ModalCar/ModalCar';
import { TextMessage } from './CatalogPage.styled';
// import { Loader } from './../../components/Loader/Loader';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(state => selectAdverts(state));
  const [allAdverts, setAllAdverts] = useState([]);
  const [page, setPage] = useState(1);
  const [filterAdverts, setFilterAdverts] = useState();
  const [isSearchAdvert, setIsSearchAdvert] = useState(false);
  const [clickButtonOnSearch, setClickButtonOnSearch] = useState(false);

  const limit = 12;
  const isOpenModal = useSelector(state => state.modal.isOpenModal);

  const onClickLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    dispatch(getAllAdverts({ limit: limit, page: page }));
  }, [dispatch, page]);

  useEffect(() => {
    if (page === 1) {
      setAllAdverts(adverts);
    } else {
      setAllAdverts(prevAdverts => {
        const uniqueAdverts = adverts.filter(
          ad => !prevAdverts.some(prevAd => prevAd.id === ad.id)
        );
        return [...prevAdverts, ...uniqueAdverts];
      });
    }
  }, [adverts, page]);

  const filteredAdverts = [];
  if (filterAdverts) {
    filteredAdverts.push(filterAdverts);
  }

  return (
    <Container>
      {allAdverts && (
        <>
          <SearchBar
            allAdverts={allAdverts}
            filterAdverts={filterAdverts}
            setFilterAdverts={setFilterAdverts}
            setIsSearchAdvert={setIsSearchAdvert}
            setClickButtonOnSearch={setClickButtonOnSearch}
          />
          {clickButtonOnSearch === false ? (
            <>
              <AdvertList adverts={allAdverts} />
              {allAdverts.length < 36 && (
                <ButtonLoadMore onClickLoadMore={onClickLoadMore} />
              )}
            </>
          ) : isSearchAdvert === true ? (
            <AdvertList adverts={filteredAdverts} />
          ) : (
            <TextMessage>Nothing found for your search!</TextMessage>
          )}
        </>
      )}
      {isOpenModal && <ModalCar />}
    </Container>
  );
};

export default CatalogPage;
