import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   height: 100vh;
   justify-content: center;
   align-items: center;
   background-color: hsl(30, 38%, 92%);
   padding: 0 1rem;
`;

export const Wrapper = styled.div`
   background-color: #fff;
`;

export const ImageWrapper = styled.div`
   border-radius: 1rem 1rem 0 0;
   overflow: hidden;
`;

export const Image = styled.img`
   height: 100%;
   width: 100%;
`;

export const Description = styled.div`
   padding: 1.5rem 1rem;
`;

export const Type = styled.h4`
   color: hsl(228, 12%, 48%);
`;

export const Title = styled.h1`
   color: hsl(212, 21%, 14%);
   margin: 1rem 0;
`;

export const Info = styled.p`
   color: hsl(228, 12%, 48%);
`;

export const PriceWrapper = styled.div`
   display: flex;
   margin: 1rem 0;
   align-items: center;
`;

export const Price = styled.p`
   color: hsl(158, 36%, 37%);
`;

export const DiscPrice = styled.small`
   color: hsl(228, 12%, 48%);
   text-decoration: line-through;
`;

export const Button = styled.button`
   background-color: hsl(158, 36%, 37%);
   color: white;
   border: none;
`;
