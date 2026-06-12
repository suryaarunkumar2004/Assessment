import styled from "styled-components";

export const CardWrapper = styled.div<{ $checked: boolean }>`
  background: var(--color-surface);
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1.5px solid ${({ $checked }) => ($checked ? "var(--color-accent)" : "var(--color-border)")};
  box-shadow: ${({ $checked }) =>
    $checked ? "0 0 0 3px rgba(108,99,255,0.18), var(--shadow-card)" : "var(--shadow-card)"};
  transition: all var(--transition);
  cursor: pointer;
  position: relative;

  &:hover {
    transform: translateY(-4px);
    border-color: var(--color-accent);
    box-shadow: 0 12px 40px rgba(108,99,255,0.22), var(--shadow-card);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  display: block;
  transition: transform var(--transition);

  ${CardWrapper}:hover & {
    transform: scale(1.04);
  }
`;

export const CardInfo = styled.div`
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardTitle = styled.p`
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--color-text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 65%;
  font-family: var(--font-body);
`;

export const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
  user-select: none;
`;

export const StyledCheckbox = styled.input`
  display: none;
`;

export const Checkmark = styled.span<{ $checked: boolean }>`
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.6rem;
  border-radius: 20px;
  border: 1.5px solid ${({ $checked }) => ($checked ? "var(--color-accent-3)" : "var(--color-border)")};
  color: ${({ $checked }) => ($checked ? "var(--color-accent-3)" : "var(--color-text-muted)")};
  background: ${({ $checked }) => ($checked ? "rgba(67,233,123,0.1)" : "transparent")};
  transition: all var(--transition);
  white-space: nowrap;

  &:hover {
    border-color: var(--color-accent);
    color: var(--color-accent);
  }
`;
