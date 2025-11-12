# Digital CV - Yağmur Varol

A modern, responsive digital CV application built with React, TypeScript, and Tailwind CSS. Features high-quality PDF export functionality.

## Features

- 📄 Professional CV layout with sidebar and main content sections
- 📱 Fully responsive design
- 📥 High-quality PDF export with exact layout preservation
- 🎨 Modern UI with Tailwind CSS
- ⚡ Fast and optimized with Vite

## Run Locally

**Prerequisites:** Node.js 18+

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open your browser at `http://localhost:3000`

## Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

## Deploy to Netlify

### Option 1: Deploy via Netlify UI

1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Netlify will auto-detect the settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click "Deploy site"

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

### Netlify Configuration

The project includes `netlify.toml` with:
- Build command: `npm run build`
- Publish directory: `dist`
- SPA routing support (all routes redirect to index.html)

## Project Structure

```
digital_cv_yagmur_varol/
├── public/           # Static assets (images)
├── components/       # React components
├── App.tsx          # Main application component
├── index.html       # HTML template
├── vite.config.ts   # Vite configuration
└── netlify.toml     # Netlify deployment config
```

## Technologies

- React 19
- TypeScript
- Vite
- Tailwind CSS
- html2canvas & jsPDF (for PDF export)
