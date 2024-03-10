import { Container } from './../../components/Container/Container';
import { HomeText, HomeTitle } from './HomePage.styled';

const HomePage = () => {
  return (
    <Container>
      <HomeTitle>Welcome to the Rental Car Service!</HomeTitle>
      <HomeText>We provide car rental services throughout Ukraine!</HomeText>
    </Container>
  );
};

export default HomePage;
