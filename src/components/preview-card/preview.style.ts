import styled from 'styled-components';
import Fraunces from '../../assets/fonts/Fraunces-VariableFont_SOFT,WONK,opsz,wght.ttf';
import Montserrat from '../../assets/fonts/Montserrat-VariableFont_wght.ttf';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: hsl(30, 38%, 92%);
  padding: 0 1rem;

  @font-face {
    font-family: Fraunces;
    src: url(${Fraunces});
  }

  @font-face {
    font-family: Montserrat;
    src: url(${Montserrat});
  }
`;

export const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 0.7rem;
  overflow: hidden;
  width: 20rem;
  @media screen and (min-width: 768px) {
    display: flex;
    width: 40rem;
  }
`;

export const ImageWrapper = styled.div`
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

export const MobileImage = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const DekstopImage = styled.img`
  height: 100%;
  display: none;
  width: 100%;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const Description = styled.div`
  padding: 1.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

export const DescWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    //background-color: red;
    height: 25rem;
  }
`;

export const Type = styled.h5`
  color: hsl(228, 12%, 48%);
  font-family: Montserrat, sans-serif;
  letter-spacing: 5px;
`;

export const Title = styled.h1`
  color: hsl(212, 21%, 14%);
  font-family: Fraunces, sans-serif;
  margin: 1rem 0;
  font-weight: 700;
  font-size: 1.8rem;
`;

export const Info = styled.p`
  color: hsl(228, 12%, 48%);
  font-family: Montserrat, sans-serif;
  font-weight: 500;
`;

export const PriceWrapper = styled.div`
  display: flex;
  margin: 1rem 0;
  align-items: center;
`;

export const Price = styled.p`
  color: hsl(158, 36%, 37%);
  font-size: 1.7rem;
  font-weight: 900;
  margin: 0 0.9rem 0 0;
`;

export const DiscPrice = styled.small`
  color: hsl(228, 12%, 48%);
  font-size: 0.9rem;
  text-decoration: line-through;
`;

export const Button = styled.button`
  background-color: hsl(158, 36%, 37%);
  color: white;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  border: none;
  font-weight: 900;
  border-radius: 0.5rem;
  img {
    margin: 0 0.6rem 0 0;
  }
  &:hover {
    background-color: hsl(159, 36%, 21%);
  }
  &:active {
    transform: scale(0.95);
  }
`;
