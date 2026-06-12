import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(32px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.35; }
  50% { transform: scale(1.12); opacity: 0.55; }
`;

export const HomeWrapper = styled.div`
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 1.5rem;
  position: relative;
  overflow: hidden;
`;

export const GlowOrb = styled.div<{ $pos: "top-left" | "bottom-right" }>`
  position: absolute;
  width: 480px;
  height: 480px;
  border-radius: 50%;
  background: ${({ $pos }) =>
    $pos === "top-left"
      ? "radial-gradient(circle, rgba(108,99,255,0.22) 0%, transparent 70%)"
      : "radial-gradient(circle, rgba(255,101,132,0.18) 0%, transparent 70%)"};
  top: ${({ $pos }) => ($pos === "top-left" ? "-120px" : "auto")};
  bottom: ${({ $pos }) => ($pos === "bottom-right" ? "-120px" : "auto")};
  left: ${({ $pos }) => ($pos === "top-left" ? "-120px" : "auto")};
  right: ${({ $pos }) => ($pos === "bottom-right" ? "-120px" : "auto")};
  animation: ${pulse} 6s ease-in-out infinite;
  pointer-events: none;
  z-index: 0;
`;

export const HeroSection = styled.section`
  text-align: center;
  max-width: 640px;
  width: 100%;
  animation: ${fadeUp} 0.7s ease both;
  position: relative;
  z-index: 1;
`;

export const Decoration = styled.p`
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: var(--color-accent);
  text-transform: uppercase;
  margin-bottom: 1.25rem;
  font-family: var(--font-display);
`;

export const HeroTitle = styled.h1`
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -1.5px;
  margin-bottom: 1.25rem;
  background: linear-gradient(135deg, var(--color-text) 40%, var(--color-accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const HeroSub = styled.p`
  font-size: 1.05rem;
  color: var(--color-text-muted);
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

export const InputRow = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
`;

export const NameInput = styled.input`
  flex: 1;
  min-width: 220px;
  max-width: 360px;
  padding: 0.85rem 1.25rem;
  background: var(--color-surface);
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text);
  font-size: 1rem;
  outline: none;
  transition: all var(--transition);

  &::placeholder {
    color: var(--color-text-muted);
  }

  &:focus {
    border-color: var(--color-accent);
    box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.18);
  }
`;

export const NextButton = styled.button`
  padding: 0.85rem 2rem;
  background: var(--color-accent);
  color: #fff;
  font-size: 0.97rem;
  font-weight: 700;
  font-family: var(--font-display);
  border: none;
  border-radius: var(--radius-md);
  transition: all var(--transition);
  letter-spacing: 0.02em;

  &:hover {
    background: #5a52e0;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(108, 99, 255, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;
