import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { firebaseConfig } from "./firebaseConfig.js";

// Initialize Firebase directly with the imported config
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const loginScreen = document.getElementById('login-screen');
const dashboardScreen = document.getElementById('dashboard-screen');

loginBtn.addEventListener('click', () => {
    loginScreen.classList.add('hidden');
    dashboardScreen.classList.remove('hidden');
    console.log("Logged into Dashboard");
});

logoutBtn.addEventListener('click', () => {
    loginScreen.classList.remove('hidden');
    dashboardScreen.classList.add('hidden');
});