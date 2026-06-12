import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

export const SavedWrapper = styled.main`
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

export const SavedTitle = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--color-text);

  span {
    background: linear-gradient(135deg, var(--color-accent-3), var(--color-accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const SavedMessage = styled.p`
  color: var(--color-text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
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

export const EmptyState = styled.div`
  text-align: center;
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const EmptyIcon = styled.div`
  font-size: 4rem;
  animation: ${bounce} 2s ease-in-out infinite;
`;

export const EmptyText = styled.h3`
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-text-muted);
`;

export const EmptySub = styled.p`
  font-size: 0.95rem;
  color: var(--color-text-muted);
  max-width: 380px;
  line-height: 1.6;

  strong {
    color: var(--color-accent);
    font-weight: 600;
  }
`;
