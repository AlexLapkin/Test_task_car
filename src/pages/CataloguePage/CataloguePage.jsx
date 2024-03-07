// import { Container } from '../../components/Layout/Container/Container';
// import { DrinkPageWrapper } from './DrinkPage.styled';
import AdvertList from '../../components/AdvertList/AdvertList';
// import DrinkIngredientsList from '../../components/DrinkIngredientList/DrinkIngredientsList';
// import RecipePreparation from '../../components/RecipePreparation/RecipePreparation';
// import { useParams } from 'react-router-dom';
// import { getDrinkById } from '../../redux/drinks/drinks.operations';
// import { selectDrinkById } from '../../redux/drinks/drinks.selectors';
// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Container } from './../../components/Container/Container';
import adverts from './../../helpers/adsCars.json';

const CataloguePage = () => {
  //   const dispatch = useDispatch();
  //   const { drinkId } = useParams();
  // const drink = useSelector(state => selectDrinkById(state, drinkId));
  //   const adverts = useSelector(state => selectDrinkById(state, drinkId));

  //   useEffect(() => {
  //     dispatch(getDrinkById(drinkId));
  //   }, [dispatch, drinkId]);
  console.log(adverts);

  return (
    <Container>
      {/* <DrinkPageWrapper> */}
      {/* {drink && ( */}
      <>
        {/* <AdvertList
        id={drink._id}
        name={drink.drink}
        glass={drink.glass}
        alcoholic={drink.alcoholic}
        description={drink.description}
        imgPath={drink.drinkThumb}
      /> */}
        <AdvertList adverts={adverts} />
        {/* <RecipePreparation instructions={drink.instructions} /> */}
      </>

      {/* </DrinkPageWrapper> */}
    </Container>
  );
};

export default CataloguePage;
