// Your Firebase config — replace YOUR_API_KEY, etc. with your actual values
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "fir-webapp-demo-25de3.firebaseapp.com",
  projectId: "fir-webapp-demo-25de3",
  storageBucket: "fir-webapp-demo-25de3.appspot.com",
  messagingSenderId: "764701575468",
  appId: "1:764701575468:web:4a67ec1ca50b71269c0489"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.addEventListener("DOMContentLoaded", () => {
  const buttonA = document.getElementById("buttonA");
  const buttonB = document.getElementById("buttonB");
  const userInput = document.getElementById("userInput");

  // Debug alert: page loaded
  alert("Script loaded successfully");

  if (buttonA) {
    buttonA.addEventListener("click", async () => {
      alert("Button A clicked");
      const text = userInput.value.trim();

      if (text) {
        try {
          await db.collection("inputs").add({
            text: text,
            page: "A",
            timestamp: new Date()
          });
          alert("Data sent to Firestore: " + text);
        } catch (err) {
          alert("Error writing to Firestore: " + err);
        }
      } else {
        alert("Input is empty, nothing sent");
      }

      window.location.href = "pageA.html";
    });
  }

  if (buttonB) {
    buttonB.addEventListener("click", async () => {
      alert("Button B clicked");
      const text = userInput.value.trim();

      if (text) {
        try {
          await db.collection("inputs").add({
            text: text,
            page: "B",
            timestamp: new Date()
          });
          alert("Data sent to Firestore: " + text);
        } catch (err) {
          alert("Error writing to Firestore: " + err);
        }
      } else {
        alert("Input is empty, nothing sent");
      }

      window.location.href = "pageB.html";
    });
  }
});
