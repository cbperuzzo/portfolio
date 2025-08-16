A personal portfolio website built with React to showcase my projects, skills, and contact information, featuring smooth navigation and a modern UI.

## Installation

1. Clone this repository:
```bash
   git clone https://github.com/cbperuzzo/portfolio.git
   cd portfolio
```
2. Install dependencies:
```bash
   npm i
```
3. Start the development server:
```bash
   npm run dev
```

# project structure

## src/
The source code of the application.

### assets/
Static files such as images, icons, and fonts.

### components/
Small, reusable UI elements used across the app.  

### context/
React Context providers for shared state.  
Includes:  
- `AppContext.jsx` : provides `content` and `refs` via `useApp()` and `useContent()`

### css/
CSS files or modules for styling components and sections.  

### data/
Static content or configuration files.
Includes:
- `content.json` : all textual content and dynamic page data is stored here.

### sections/
Main page sections of the portfolio (large components).  

### utils/
Helper functions or small modules used across the app.  

### App.jsx
The root component of the application. Wraps all sections.

### main.jsx
Entry point of the application.
