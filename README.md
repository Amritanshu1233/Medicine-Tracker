MediTrack Pro 🏥

MediTrack Pro is a lightweight, web-based inventory and expiry management system designed to help users track medicine stocks, monitor expiration dates, and prevent waste. It features a real-time dashboard, visual status indicators, and persistent cloud storage using Firebase.

🚀 Features

Dashboard Overview: Real-time statistics for Total Stock, Expiring Soon, Expired Items, and Low Stock.

Smart Status Tracking:

🔴 Expired: Visual alerts for items past their date.

🟠 Warning: Custom thresholds (default 30 days) for "Expiring Soon" alerts.

🔵 Low Stock: Alerts when quantity drops below 10 units.

🟢 Good: Items that are safe and well-stocked.

Inventory Management:

Add, remove, and view medicine details (Name, Batch #, Expiry Date, Quantity).

Search by medicine name or batch number.

Filter inventory by status categories.

Customizable Settings: Users can set their own "Expiring Soon" day threshold.

Responsive Design: Works seamlessly on desktop and mobile devices.

Cloud Persistence: Uses Google Firebase (Firestore) for data storage and Authentication for user sessions.

🛠️ Tech Stack

Frontend: HTML5, CSS3 (CSS Variables, Flexbox/Grid), JavaScript (ES Modules).

Backend (BaaS): Firebase Authentication, Cloud Firestore.

Hosting: Static hosting (can be hosted on GitHub Pages, Netlify, Vercel, or Firebase Hosting).

📂 Project Structure

/
├── index.html    # Main application structure (Login & Dashboard)
├── style.css     # Styling, themes, and responsive layout
├── app.js        # Application logic, Firebase connectivity, and UI state management
└── README.md     # Project documentation


⚙️ Installation & Setup

1. Clone the Repository

git clone [https://github.com/yourusername/meditrack-pro.git](https://github.com/yourusername/meditrack-pro.git)
cd meditrack-pro


2. Configure Firebase

Note: The current code uses environment variables (__firebase_config) intended for specific sandbox environments. To run this locally, you must update app.js.

Go to the Firebase Console.

Create a new project.

Enable Authentication (turn on "Anonymous" sign-in provider).

Enable Cloud Firestore (start in Test Mode for development).

In Project Settings, create a web app and copy the firebaseConfig object.

Open app.js and replace the configuration lines at the top:

Replace this:

const firebaseConfig = JSON.parse(__firebase_config);
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';


With this:

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};
const appId = "meditrack-pro"; // You can keep this as a static string


3. Run the Application

Since the app uses ES Modules, you likely need a local server to avoid CORS errors with local files.

Using Python:

python3 -m http.server
# Open browser at http://localhost:8000


Using VS Code Live Server:
Right-click index.html and select "Open with Live Server".

📖 Usage Guide

Login: Click "Access Dashboard" to sign in anonymously.

Add Medicine: (Ensure you have implemented the Modal UI logic connected to the addDoc function in your full code).

Settings: Click the "⚙️ Settings" button to change how many days in advance you want to be warned about expiring medicines.

Delete: Click the trash icon 🗑️ to remove an item from the inventory.

🛡️ License

This project is open-source and available under the MIT License.
