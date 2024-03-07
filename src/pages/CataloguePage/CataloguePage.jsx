// import { Container } from '../../components/Layout/Container/Container';
// import { DrinkPageWrapper } from './DrinkPage.styled';
import AdvertList from '../../components/AdvertList/AdvertList';
// import DrinkIngredientsList from '../../components/DrinkIngredientList/DrinkIngredientsList';
// import RecipePreparation from '../../components/RecipePreparation/RecipePreparation';
// import { useParams } from 'react-router-dom';
import { getAllAdverts } from '../../redux/adverts/adverts.operations';
import { selectAllAdverts } from '../../redux/adverts/adverts.selectors';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from './../../components/Container/Container';
import SearchBar from 'components/SearchBar/SearchBar';
// import { Wrapper } from 'components/SearchBar/SearchBar.styled';
import { PageWrapper } from './CataloguePage.styled';
// import SearchButton from 'components/SearchBar/SearchButton';
// import adverts from './../../helpers/adsCars.json';
// import { getAllAdverts } from 'redux/operations';

const CataloguePage = () => {
  const dispatch = useDispatch();
  //   const { drinkId } = useParams();
  // const drink = useSelector(state => selectDrinkById(state, drinkId));
  const adverts = useSelector(state => selectAllAdverts(state));
  // console.log(adverts);

  useEffect(() => {
    dispatch(getAllAdverts());
  }, [dispatch]);
  // console.log(adverts);

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
          </>
        )}
      </PageWrapper>
    </Container>
  );
};

export default CataloguePage;
