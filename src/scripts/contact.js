import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// Initialize Firebase
const firebaseConfig = { 
    apiKey: "AIzaSyD0eE21txhtkVH4cNb0At8icryCH9tXKTM",
    authDomain: "contact-b08m4.firebaseapp.com",
    projectId: "contact-b08m4",
    storageBucket: "contact-b08m4.appspot.com",
    messagingSenderId: "1068827220778",
    appId: "1:1068827220778:web:aeeb7cb012967bd7419c53",

    databaseURL: "https://contact-b08m4-default-rtdb.firebaseio.com/"
 };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const yourDataTableRef= ref(database, "contactform")

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    // get values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // saves message
    const data = { name, email, message }

    try {
        push(yourDataTableRef, data);
        // If successful, show success alert and hide error alert
        document.getElementById('successAlert').classList.remove('hidden');
        document.getElementById('errorAlert').classList.add('hidden');

        // Clear form after submitting the message
        document.getElementById('contactForm').reset();

        // Scroll to Contact Section
        const targetElement = document.getElementById('contact');
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.warn("Target element not found for scrolling");
        }

        // Hide alert after 3 seconds
        setTimeout(() => {
            document.getElementById('successAlert').classList.add('hidden');
        }, 3000);

    } catch (error) {
        // If error, show error alert and hide success alert
        console.error("Error submitting form:", error);
        document.getElementById('successAlert').classList.add('hidden');
        document.getElementById('errorAlert').classList.remove('hidden');

        // Hide error alert after 3 seconds
        setTimeout(() => {
            document.getElementById('errorAlert').classList.add('hidden');
        }, 3000);
    }
    
});