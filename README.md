# Restaurant Page
A simple, modular restaurant website built with JavaScript, HTML, CSS, and Webpack. The project demonstrates tab-based navigation (Home, Menu, and Contact) using modular JS functions to dynamically update page content.

# Deployed on GitHub Pages -> https://mcodes23.github.io/restaurant-page/

<img width="1455" height="924" alt="restaurant-page" src="https://github.com/user-attachments/assets/47f4c727-97cc-485e-a74f-62e518399342" />

# Features
- Modular JavaScript: Each page (Home, Menu, Contact) lives in its own module.
- Dynamic DOM rendering: No page reloads, content is injected dynamically.
- Styled UI: Clean layout with buttons, cards, and hover effects.
- Webpack Bundling: Assets and scripts bundled for production.
- Deployed with GitHub Pages.

# Tech Stack
1. HTML5
2. CSS3 (Flexbox & Grid)
3. JavaScript (ES6 Modules)
4. Webpack

# Installation & Setup
1. Clone the repo:  
- git clone https://github.com/your-username/your-repo.git
- cd your-repo
2. Install dependencies:
npm install
3. Run in development mode (with live reload):
npm run dev
4. Build for production:
npm run build
# Deployment
The project is deployed via GitHub Pages using the gh-pages branch.
# Deploy steps:
npm run build
git add dist -f
git commit -m "Deployment commit"
git subtree push --prefix dist origin gh-pages

