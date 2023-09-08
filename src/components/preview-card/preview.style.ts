import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   height: 100vh;
   justify-content: center;
   align-items: center;
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

export const Description = styled.div``;

export const Type = styled.h4`
   color: hsl(228, 12%, 48%);
`;

export const Info = styled.p`
   color: hsl(228, 12%, 48%);
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
