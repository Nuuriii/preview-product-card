import MobilePreview from "../../assets/image-product-mobile.jpg";
import Cart from "../../assets/icon-cart.svg";
import {
   Container,
   Wrapper,
   ImageWrapper,
   Image,
   Description,
   Type,
   Title,
   Info,
   PriceWrapper,
   Price,
   DiscPrice,
   Button,
} from "./preview.style";

export const Preview = () => {
   return (
      <Container>
         <Wrapper>
            <ImageWrapper>
               <Image src={MobilePreview} />
            </ImageWrapper>
            <Description>
               <Type>Perfume</Type>
               <Title>Gabrielle Essence Eau De Parfum</Title>
               <Info>
                  A floral, solar and voluptuous interpretation composed by
                  Olivier Polge, Perfumer-Creator for the House of CHANEL.
               </Info>
               <PriceWrapper>
                  <Price>$149.99</Price>
                  <DiscPrice>$169.99</DiscPrice>
               </PriceWrapper>
               <Button>
                  <img src={Cart} alt='' />
                  <span> Add to Cart</span>
               </Button>
            </Description>
         </Wrapper>
      </Container>
   );
};
