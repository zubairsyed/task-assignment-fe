# Frontend - Test Assignment

A React-based frontend application for the Login System Assignment, deployable to Google App Engine.

# Setup Instructions

```bash
git clone https://github.com/zubairsyed/task-assignment-fe.git
cd login_radius_FE
npm install
```

---

## Scripts

```bash
npm start        # Runs the app in development
npm run build    # Builds for production
npm run deploy   # Deploys to Google App Engine
```

## Folder Structure

src/
├── Components/ # Reusable UI components
├── Constants/ # App-wide constants
├── Network/ # API calls and configs
├── Screens/ # Page-level components (Login, Dashboard, etc.)
├── Utils/ # Helper functions
├── App.js # Main component
├── index.js # Entry point

# Architecture & Design Decisions

- React :
  Component-based library with version 19.1.0, ideal for building modular UIs.

- MUI :
  pre-built, customizable accessible UI components. Uses @emotion/react and @emotion/

  Styled under the hood — more performance and flexibility compared to CSS modules.

- react-hook-form :
  Lightweight and performant form state management.

  Excellent for validation, async handling, and integrating with UI libs like MUI.

- Routing: react-router-dom v7
  Full nested routing.

  Declarative, component-first route definitions.

  Simplified APIs like createBrowserRouter or Routes.

- Axios :
  Simpler API for interceptors, global
  headers, and error handling.

  Clean abstraction for API utilities.

- Project Bootstrapping: create-react-app
  Zero-config setup.

  Comes pre-configured with Babel, Webpack, ESLint, and testing.

- Google Cloud App Engine
  Easy managed service to deploy React static sites.

  gcloud app deploy script indicates preference for serverless hosting with CI/CD compatibility.

  Scalable and integrates well with other GCP services.

# Hosting Platform Details

Specifically: Google App Engine (GAE)

# Why GAE?

- Managed hosting : No need to manage servers — just deploy your app
- Auto-scaling : Automatically scales based on traffic
- HTTPS by default : Secured out of the box
- Custom domain support : Easily attach custom domains
- CI/CD friendly : Works well with GitHub Actions, Cloud Build
- Simple deployment : One-line deployment via `gcloud app deploy`

# Expected App Structure for Deployment

npm run build

# Required File: app.yaml (in project root)

runtime: nodejs18  
instance_class: F2
env: standard

handlers:

- url: /(._)
  static_files: build/\1
  upload: build/(._)
  secure: always

# Deployment on google cloud platform

1.  Install Google Cloud CLI
    https://cloud.google.com/sdk/docs/install

2.  Login to GCP
    gcloud auth login

3.  Set Project
    gcloud config set project test-assignment-fe

4.  Deploy
    npm run build
    gcloud app deploy
    Gloud app browse
