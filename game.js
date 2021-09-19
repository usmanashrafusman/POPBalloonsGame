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

firebase.auth().onAuthStateChanged((user) => {
    let userEmail = document.getElementById("userEmail")
    if (user) {
        var uid = user.uid;
        let email = user.email;
        userEmail.innerText = email
    }
})

let colorarr = ["rgb(64, 67, 242)", "rgb(242, 150, 64)", "rgb(143, 145, 108)", "rgb(239, 64, 242)", "rgb(157,122,158)"]
let colorName = ["C11CC0E", "C4043F2", "CF29640", "C8F916C", "CEF40F2"]

const createBalons = (color) => {
    let c = Math.random() * 5;
    noOfColor = Math.floor(c)
    let main = document.getElementById("allBaloons")
    let baloon = document.createElement("div");
    baloon.setAttribute("class", "baloon " + colorName[noOfColor]);
    main.appendChild(baloon)
    baloon.style.backgroundColor = colorarr[noOfColor]
    
}

for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 5; j++) {
        createBalons(j)
    }
}

let colorToPOP = document.getElementById("color");
colorToPOP.style.backgroundColor = colorarr[noOfColor]
let allBaloonAni = document.getElementsByClassName(colorName[noOfColor]).length;

let popped = 0;
let lifes = 3;
let totalToPOP = document.getElementById("totalToPop");
let toPOP = 4;
totalToPOP.innerText = toPOP

document.addEventListener('mouseover', function (e) {
    if (getComputedStyle(e.target).getPropertyValue("background-color") == (colorarr[noOfColor])) {
        e.target.style.visibility = 'hidden';
        popped++
        totalToPOP.innerText = toPOP - popped;
        console.log(popped);
        checkAllPopped();
        setTimeout(function () {
            let newToCreate = Math.random() * 5;
            newColorCreated = Math.floor(newToCreate)
            
            e.target.style.visibility = 'visible';

            if(allBaloonAni<=3){
                e.target.style.backgroundColor = colorarr[noOfColor]; 
            }
            else{
                e.target.style.backgroundColor = colorarr[newColorCreated];
            }

        }, 3000);
    }

    else if (e.target.classList.contains('baloon')) {
        e.target.style.visibility = 'hidden';
        lifes--;
        gameOver();

        setTimeout(function () {
            let newToCreate = Math.random() * 5;
            newColorCreated = Math.floor(newToCreate)
            e.target.style.visibility = 'visible';
            if(allBaloonAni<=3){
                e.target.style.backgroundColor = colorarr[noOfColor]; 
            }
            else{
                e.target.style.backgroundColor = colorarr[newColorCreated];
            }

        }, 3000);
      
    }
    let remaingLife = document.getElementById("lifes");
    remaingLife.innerText = lifes;
});

function checkAllPopped() {
    if (popped == toPOP) {
        console.log('all popped!');
    let popUp = document.createElement("div")
    popUp.setAttribute("class" , "popUp")
    let nextLevel = document.createElement("a")
    nextLevel.innerText="Next Level"
    nextLevel.setAttribute("class" , "button button2")
    nextLevel.setAttribute("href" , "level2.html")
    popUp.appendChild(nextLevel)
    document.body.appendChild(popUp)
    let page = document.getElementById("allBaloons");
    page.style.opacity=0.5;   
    }
};
const gameOver = () => {
    if (lifes == 0) {
        console.log("Game Over")
        let popUp = document.createElement("div")
        popUp.setAttribute("class" , "popUp")
        let nextLevel = document.createElement("a")
        nextLevel.innerText="Try Again"
        nextLevel.setAttribute("class" , "button button2")
        nextLevel.setAttribute("href" , "game.html")
        popUp.appendChild(nextLevel)
        document.body.appendChild(popUp)
        let page = document.getElementById("allBaloons");
        page.style.opacity=0.5; 
    }

}

const signOut = ()=>{
    firebase.auth().signOut().then(() => {
      location.href="index.html"
    }).catch((error) => {
      // An error happened.
    });
  } 