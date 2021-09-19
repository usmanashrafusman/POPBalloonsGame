const firebaseConfig = {
    apiKey: "AIzaSyDaur7zbmsnuDRdCFwntygww3D3pfpCr4M",
    authDomain: "teamreporter-31b40.firebaseapp.com",
    databaseURL: "https://teamreporter-31b40-default-rtdb.firebaseio.com",
    projectId: "teamreporter-31b40",
    storageBucket: "teamreporter-31b40.appspot.com",
    messagingSenderId: "249691784285",
    appId: "1:249691784285:web:d95d74218de98e297d39b4",
    measurementId: "G-HK76KQD3TD"
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


