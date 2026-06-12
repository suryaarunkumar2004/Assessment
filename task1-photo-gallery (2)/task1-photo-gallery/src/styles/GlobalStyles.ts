import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --color-bg: #0a0a0f;
    --color-surface: #111118;
    --color-surface-2: #1a1a24;
    --color-border: #2a2a3a;
    --color-accent: #6c63ff;
    --color-accent-2: #ff6584;
    --color-accent-3: #43e97b;
    --color-text: #f0eff8;
    --color-text-muted: #7c7c9a;
    --font-display: 'Syne', sans-serif;
    --font-body: 'DM Sans', sans-serif;
    --radius-sm: 8px;
    --radius-md: 14px;
    --radius-lg: 22px;
    --shadow-card: 0 8px 32px rgba(0,0,0,0.45);
    --transition: 0.22s cubic-bezier(0.4,0,0.2,1);
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--color-bg);
    color: var(--color-text);
    font-family: var(--font-body);
    min-height: 100vh;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    font-family: var(--font-body);
  }

  input {
    font-family: var(--font-body);
  }

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: var(--color-surface);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--color-accent);
    border-radius: 3px;
  }
`;
