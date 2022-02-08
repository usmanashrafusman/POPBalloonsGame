const firebaseConfig = {
  apiKey: "AIzaSyA7opaIwJ8yHujvw0KoTqQu-I33gqBL8b8",
  authDomain: "pop-baloon.firebaseapp.com",
  projectId: "pop-baloon",
  storageBucket: "pop-baloon.appspot.com",
  messagingSenderId: "329405133458",
  appId: "1:329405133458:web:77d266f89a2e76c3e5ac4b",
  measurementId: "G-Z62HYER32F"
};



firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

// Firebse Authorizing Completed


const signUpFile = () => { location.href = "singUp.html" }
const singUpUser = () => {


    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            db.collection("Clients")
            .doc(email)
            .set({
              email: email,
              password: password,
              clientName : username
            })
      
            .then(() => {
              alert("your Account Is Created");
              location.reload();
            })
            .catch((error) => {
              console.error("Error adding document: ", error);
            });
            // ...
            console.log(user);
            alert("Your Account Is Created")

          
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });


}
const loginFile = () => {
    location.href = "index.html"
}
let userArr = [];

const logIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userEmail = auth.currentUser.email;
        userArr.push(email)
        location.href = "game.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
      
  };


