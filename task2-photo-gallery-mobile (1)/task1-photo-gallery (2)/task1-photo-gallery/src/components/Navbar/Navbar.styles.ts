import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.5rem;
  height: 64px;
  background: rgba(10, 10, 15, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const NavBrand = styled.span`
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--color-accent), var(--color-accent-2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const NavLink = styled(Link)<{ $active: boolean }>`
  padding: 0.45rem 1.1rem;
  border-radius: var(--radius-sm);
  font-size: 0.92rem;
  font-weight: 500;
  transition: all var(--transition);
  background: ${({ $active }) => ($active ? "var(--color-accent)" : "transparent")};
  color: ${({ $active }) => ($active ? "#fff" : "var(--color-text-muted)")};
  border: 1px solid ${({ $active }) => ($active ? "var(--color-accent)" : "var(--color-border)")};

  &:hover {
    background: ${({ $active }) => ($active ? "var(--color-accent)" : "var(--color-surface-2)")};
    color: var(--color-text);
    border-color: var(--color-accent);
  }
`;
