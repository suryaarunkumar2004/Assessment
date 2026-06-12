import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const DetailsWrapper = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem 4rem;
  animation: ${fadeIn} 0.5s ease both;
`;

export const PageHeader = styled.div`
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--color-border);
`;

export const Greeting = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 700;
  margin-bottom: 0.4rem;
  color: var(--color-text);

  span {
    background: linear-gradient(135deg, var(--color-accent), var(--color-accent-2));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const GridArea = styled.div`
  min-height: 300px;
`;

export const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const LoadingText = styled.p`
  text-align: center;
  padding: 5rem 0;
  color: var(--color-text-muted);
  font-size: 1rem;
  font-family: var(--font-display);

  &::after {
    content: '';
    animation: dots 1.5s steps(3, end) infinite;
  }
`;

export const ErrorText = styled.p`
  text-align: center;
  padding: 5rem 0;
  color: var(--color-accent-2);
  font-size: 1rem;
`;

export const EmptyText = styled.p`
  text-align: center;
  padding: 5rem 0;
  color: var(--color-text-muted);
  font-size: 1rem;
`;
