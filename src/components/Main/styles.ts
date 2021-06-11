import styled from 'styled-components';

export const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  padding: 3rem;
  background-color: #06092b;
  color: #fff;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: min(25rem, 100%);
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
`;

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`;

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`;
