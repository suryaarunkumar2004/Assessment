import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  margin-top: 2.5rem;
  flex-wrap: wrap;
`;

export const PageButton = styled.button<{
  $active?: boolean;
  $variant: "page" | "arrow";
  disabled?: boolean;
}>`
  min-width: 38px;
  height: 38px;
  border-radius: ${({ $variant }) => ($variant === "arrow" ? "var(--radius-sm)" : "50%")};
  border: 1.5px solid
    ${({ $active }) => ($active ? "var(--color-accent)" : "var(--color-border)")};
  background: ${({ $active }) =>
    $active ? "var(--color-accent)" : "var(--color-surface)"};
  color: ${({ $active, disabled }) =>
    disabled ? "var(--color-text-muted)" : $active ? "#fff" : "var(--color-text)"};
  font-size: 0.88rem;
  font-weight: ${({ $active }) => ($active ? "700" : "400")};
  font-family: var(--font-display);
  transition: all var(--transition);
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};

  &:hover:not(:disabled) {
    background: ${({ $active }) =>
      $active ? "var(--color-accent)" : "var(--color-surface-2)"};
    border-color: var(--color-accent);
    color: var(--color-text);
  }
`;

export const PageInfo = styled.span`
  color: var(--color-text-muted);
  font-size: 0.9rem;
  padding: 0 0.15rem;
`;
