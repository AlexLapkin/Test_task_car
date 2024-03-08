// import { Container } from '../../components/Layout/Container/Container';
// import { DrinkPageWrapper } from './DrinkPage.styled';
import AdvertList from '../../components/AdvertList/AdvertList';
// import DrinkIngredientsList from '../../components/DrinkIngredientList/DrinkIngredientsList';
// import RecipePreparation from '../../components/RecipePreparation/RecipePreparation';
// import { useParams } from 'react-router-dom';
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
// import { getAllAdverts } from 'redux/operations';

const CataloguePage = () => {
  const dispatch = useDispatch();
  //   const { drinkId } = useParams();
  // const drink = useSelector(state => selectDrinkById(state, drinkId));
  const adverts = useSelector(state => selectAllAdverts(state));
  // console.log(adverts);
  const limit = 12;
  // const page = 1;
  // const [gallery, setGallery] = useState(null);
  const [page, setPage] = useState(1);
  const isOpenModal = useSelector(state => state.modal.isOpenModal);

  // const fetchAdverts = page => {
  //   try {
  //     const { data } = getAllAdverts(page, limit);
  //     setGallery(prevState => (page === 1 ? data : [...prevState, ...data]));
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  useEffect(() => {
    dispatch(getAllAdverts({ limit: limit, page: page }, [dispatch, page]));
  });

  // useEffect(() => {
  //   dispatch(fetchAdverts());
  // });

  // console.log(adverts);

  const onClickLoadMore = () => {
    // getAllAdverts({ limit: 0, page: 0 });
    console.log(1);
    setPage(prevState => prevState + 1);
  };

  return (
    <Container>
      <PageWrapper>
        {adverts && (
          <>
            {/* <AdvertList
        id={drink._id}
        name={drink.drink}
        glass={drink.glass}
        alcoholic={drink.alcoholic}
        description={drink.description}
        imgPath={drink.drinkThumb}
      /> */}
            <SearchBar />
            {/* <SearchBar onSubmit={formSubmit} /> */}
            <AdvertList adverts={adverts} />
            {/* <RecipePreparation instructions={drink.instructions} /> */}
            <ButtonLoadMore onClickLoadMore={onClickLoadMore} />
          </>
        )}
        {isOpenModal && <ModalCar />}
      </PageWrapper>
    </Container>
  );
};

export default CataloguePage;
