import MobilePreview from "../../assets/image-product-mobile.jpg";
import Cart from "../../assets/icon-cart.svg";
import {
   Container,
   Wrapper,
   ImageWrapper,
   Image,
   Description,
   Type,
   Info,
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
               <h1>Gabrielle Essence Eau De Parfum</h1>
               <Info>
                  A floral, solar and voluptuous interpretation composed by
                  Olivier Polge, Perfumer-Creator for the House of CHANEL.
               </Info>
               <div>
                  <Price>$149.99</Price>
                  <DiscPrice>$169.99</DiscPrice>
               </div>
               <Button>
                  <img src={Cart} alt='' />
                  <span> Add to Cart</span>
               </Button>
            </Description>
         </Wrapper>
      </Container>
   );
};
