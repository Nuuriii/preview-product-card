import styled from 'styled-components';

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
  border-radius: 0.7rem;
  overflow: hidden;
`;

export const ImageWrapper = styled.div``;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const Description = styled.div`
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
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
`;
