# Association of Civil Engineering (ACE) Website

This is the official website for the Association of Civil Engineering, built using React.js and Firebase.

## Features

- Responsive design for all devices
- Information about faculty members
- Team members and office bearers
- Events and talks schedule
- Course details and academic resources
- News and announcements
- Firebase Authentication for admin access
- Firebase Firestore for database
- Firebase Storage for images

## Tech Stack

- **Frontend:**
  - React.js
  - HTML5
  - CSS3 (with SASS)
  - JavaScript (ES6+)
  - Bootstrap 5
  - React Router for navigation
  - AOS for animations
  - SweetAlert2 for notifications

- **Backend:**
  - Firebase Authentication
  - Firebase Firestore
  - Firebase Storage
  - Firebase Hosting

## Project Structure

```
ace-website/
├── public/                 # Static files
│   ├── index.html
│   ├── favicon.ico
│   └── images/
├── src/                    # Source files
│   ├── components/        # Reusable components
│   │   ├── common/       # Common components (Navbar, Footer, etc.)
│   │   ├── faculty/      # Faculty-related components
│   │   ├── events/       # Events-related components
│   │   └── admin/        # Admin panel components
│   ├── pages/            # Page components
│   ├── styles/           # SCSS styles
│   ├── utils/            # Utility functions
│   ├── firebase/         # Firebase configuration
│   ├── context/          # React Context
│   ├── hooks/            # Custom hooks
│   ├── App.js
│   └── index.js
├── .env                   # Environment variables
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Firebase account

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd ace-website
```

2. Install dependencies:
```bash
npm install
```

3. Create a Firebase project and add your configuration:
   - Go to Firebase Console
   - Create a new project
   - Enable Authentication, Firestore, and Storage
   - Copy your Firebase config to `src/firebase/config.js`

4. Create a `.env` file in the root directory and add your Firebase configuration:
```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

5. Start the development server:
```bash
npm start
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy to Firebase:
```bash
firebase deploy
```

## Contributing

Please read our contributing guidelines before submitting pull requests.

## License

This project is licensed under the MIT License. 