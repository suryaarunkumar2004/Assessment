# Task 1 - Photo Gallery App (Desktop)
## Folder Structure

```
photo-gallery-app/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── (static assets)
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.tsx
│   │   │   └── Navbar.styles.ts
│   │   ├── PhotoCard/
│   │   │   ├── PhotoCard.tsx
│   │   │   └── PhotoCard.styles.ts
│   │   └── Pagination/
│   │       ├── Pagination.tsx
│   │       └── Pagination.styles.ts
│   ├── context/
│   │   └── AppContext.tsx
│   ├── hooks/
│   │   └── useFetchPhotos.ts
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.tsx
│   │   │   └── Home.styles.ts
│   │   ├── Details/
│   │   │   ├── Details.tsx
│   │   │   └── Details.styles.ts
│   │   └── Saved/
│   │       ├── Saved.tsx
│   │       └── Saved.styles.ts
│   ├── services/
│   │   └── photoService.ts
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   └── constants.ts
│   ├── styles/
│   │   └── GlobalStyles.ts
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Technologies Used
- React 18 + TypeScript (.tsx)
- React Router DOM v6 (Routing)
- Styled Components (Styling)
- Context API + useContext (Global State)
- useEffect, useState, useCallback (Hooks)
- https://picsum.photos/v2/list (API)
- Vite (Build Tool)

## Features
- Home page: Enter name, navigate to Details
- Details page: Photo grid with checkboxes, pagination, personalized greeting
- Saved page: Show saved photos with count message
- Context stores: userName + savedPhotos
- Reusable PhotoCard and Pagination components
