import MobilePreview from '../../assets/image-product-mobile.jpg';
import DekstopPreview from '../../assets/image-product-desktop.jpg';
import Cart from '../../assets/icon-cart.svg';
import {
  Container,
  Wrapper,
  ImageWrapper,
  MobileImage,
  DekstopImage,
  Description,
  DescWrapper,
  Type,
  Title,
  Info,
  PriceWrapper,
  Price,
  DiscPrice,
  Button,
} from './preview.style';

export const Preview = () => {
  return (
    <Container>
      <Wrapper>
        <ImageWrapper>
          <MobileImage src={MobilePreview} />
          <DekstopImage src={DekstopPreview} />
        </ImageWrapper>
        <Description>
          <DescWrapper>
            <Type>PERFUME</Type>
            <Title>Gabrielle Essence Eau De Parfum</Title>
            <Info>
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </Info>
            <PriceWrapper>
              <Price>$149.99</Price>
              <DiscPrice>$169.99</DiscPrice>
            </PriceWrapper>
            <Button>
              <img src={Cart} alt='' />
              <span> Add to Cart</span>
            </Button>
          </DescWrapper>
        </Description>
      </Wrapper>
    </Container>
  );
};
