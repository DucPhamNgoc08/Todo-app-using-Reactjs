# Todo App with ReactJS & Firebase

## Description

This Todo App is a simple task management application built with ReactJS and Firebase. Users can create, delete. All data is stored in real-time using Firebase Firestore, and the app is hosted on Firebase Hosting.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<username>/todo-app-react-firebase.git
   cd todo-app-react-firebase
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Create a Firebase configuration file:
   ```bash
   cp .env.example .env
   ```
4. Open `.env` and update the environment variables:
   ```env
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=sender_id
   REACT_APP_FIREBASE_APP_ID=app_id
   ```

## Firebase Setup

1. Go to the [Firebase Console](https://console.firebase.google.com) and create a new project.
2. Enable Firestore Database (in test or production mode).
3. Enable Authentication (Email/Password provider).
4. Initialize Firebase Hosting:
   ```bash
   npm install -g firebase-tools
   firebase login
   firebase init hosting
   # Select your project and set the public directory to 'build'
   ```
5. Deploy to Firebase:
   ```bash
   npm run build
   firebase deploy
   ```

## Project Structure

```
todo-app-react-firebase/
├─ public/           # Static files (index.html, favicon, etc.)
├─ src/
│  ├─ components/    # Reusable React components
│  ├─ pages/         # Page components (Home, Login, etc.)
│  ├─ services/      # Firebase configuration and API functions
│  ├─ styles/        # CSS or module files
│  ├─ App.js         # Main app component
│  └─ index.js       # Application entry point
├─ .env.example      # Example environment variables
├─ firebase.json     # Firebase project configuration
├─ package.json      # Project metadata and scripts
└─ README.md         # Project documentation
```

## Available Scripts

- `npm start` - Runs the app in development mode at `http://localhost:3000`
- `npm run build` - Builds the app for production
- `npm test` - Runs tests (if configured)
- `npm run lint` - Runs linting checks

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests. Follow the [GitHub Flow] for best practices.
