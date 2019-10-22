//initial firebase
var firebaseConfig = {
  apiKey: "AIzaSyAiOxJBys6rI__SnVnp7TslofL1VBGxUrI",
  authDomain: "food-497fc.firebaseapp.com",
  databaseURL: "https://food-497fc.firebaseio.com",
  projectId: "food-497fc",
  storageBucket: "food-497fc.appspot.com",
  messagingSenderId: "997252497459",
  appId: "1:997252497459:web:82f3fe2e6cb5dacbe12346",
  measurementId: "G-6KG4L4EK3G"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var db = firebase.firestore();


// ดูสถานะการ login
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    //var displayName = user.displayName;
    var email = user.email;
    console.log(email + "signed in");
    // var emailVerified = user.emailVerified;
    // var photoURL = user.photoURL;
    // var isAnonymous = user.isAnonymous;
    // var uid = user.uid;
    // var providerData = user.providerData;
    // ...
  } else {
    console.log("sign out");
    // User is signed out.
    // ...
  }
});


document.addEventListener('init', function (event) {
  var page = event.target;
  


  if (page.id === 'homePage') {
    console.log("homePage");

    $("#menubtn").click(function () {
      $("#sidemenu")[0].open();
    });

    $("#carousel").empty();
    db.collection("recomended").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {

        var item = `
        <ons-carousel-item modifier="nodivider" id="${doc.data().id}" class="recomended_item">
            <div class="thumbnail" style="background-image: url('${doc.data().photoUrl}')">
            </div>
            <div class="recomended_item_title" id="item1_name">${doc.data().name}</div>
        </ons-carousel-item>`

        $("#carousel").append(item);

      });
    });

    $("#allbtn").click(function () {
      $("#content")[0].load("shop1.html");
    });
  }


  if (page.id === 'shop1') {
    console.log("shop1");

    $("#shopss").empty();
    db.collection("Starbuck").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {

        var item1 = `
        <ons-button id=${doc.data().idmenu} >
             <ons-list-item modifier="material" class="list-item list-item--material"
                 style="background-color: rgb(255, 255, 255);">
                 
                 <div class="center list-item__center list-item--material__center">
                         
                     <span class="list-item__title list-item--material__title" style="font-size: 15pt">${doc.data().name}</span>
                     <span class="list-item__subtitle list-item--material__subtitle">&nbsp;
                         <ons-icon icon="fa-star" size="15px" style="color: rgb(10, 10, 10);">${doc.data().distance}
                         </ons-icon>
                     </span>
                 </div>
                 <div class="left list-item__left list-item--material__left" >
                     <img class="list-item__thumbnail list-item--material__thumbnail"
                     style="background-image: url('${doc.data().url}')">
                 </div>
             
             </ons-list-item>
         </ons-button>
       `
        $("#shopss").append(item1);

      });
    });
    $("#shopss1").empty();
    db.collection("Yayoi").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {

        var item11 = `
          <ons-button id=${doc.data().idmenu} >
               <ons-list-item modifier="material" class="list-item list-item--material"
                   style="background-color: rgb(255, 255, 255);">
                   
                   <div class="center list-item__center list-item--material__center">
                           
                       <span class="list-item__title list-item--material__title" style="font-size: 15pt">${doc.data().name}</span>
                       <span class="list-item__subtitle list-item--material__subtitle">&nbsp;
                           <ons-icon icon="fa-star" size="15px" style="color: rgb(10, 10, 10);">${doc.data().distance}
                           </ons-icon>
                       </span>
                   </div>
                   <div class="left list-item__left list-item--material__left" >
                       <img class="list-item__thumbnail list-item--material__thumbnail"
                       style="background-image: url('${doc.data().url}')">
                   </div>
               
               </ons-list-item>
           </ons-button>
         `
        $("#shopss1").append(item11);

      });
    });
    $("#shopss2").empty();
    db.collection("Kfc").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {

        var item22 = `
          <ons-button id=${doc.data().idmenu} >
               <ons-list-item modifier="material" class="list-item list-item--material"
                   style="background-color: rgb(255, 255, 255);">
                   
                   <div class="center list-item__center list-item--material__center">
                           
                       <span class="list-item__title list-item--material__title" style="font-size: 15pt">${doc.data().name}</span>
                       <span class="list-item__subtitle list-item--material__subtitle">&nbsp;
                           <ons-icon icon="fa-star" size="15px" style="color: rgb(10, 10, 10);">${doc.data().distance}
                           </ons-icon>
                       </span>
                   </div>
                   <div class="left list-item__left list-item--material__left" >
                       <img class="list-item__thumbnail list-item--material__thumbnail"
                       style="background-image: url('${doc.data().url}')">
                   </div>
               
               </ons-list-item>
           </ons-button>
         `
        $("#shopss2").append(item22);

      });
    });

    $("#shopss3").empty();
    db.collection("Swen").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {

        var item33 = `
          <ons-button id=${doc.data().idmenu} >
               <ons-list-item modifier="material" class="list-item list-item--material"
                   style="background-color: rgb(255, 255, 255);">
                   
                   <div class="center list-item__center list-item--material__center">
                           
                       <span class="list-item__title list-item--material__title" style="font-size: 15pt">${doc.data().name}</span>
                       <span class="list-item__subtitle list-item--material__subtitle">&nbsp;
                           <ons-icon icon="fa-star" size="15px" style="color: rgb(10, 10, 10);">${doc.data().distance}
                           </ons-icon>
                       </span>
                   </div>
                   <div class="left list-item__left list-item--material__left" >
                       <img class="list-item__thumbnail list-item--material__thumbnail"
                       style="background-image: url('${doc.data().url}')">
                   </div>
               
               </ons-list-item>
           </ons-button>
         `
        $("#shopss3").append(item33);

      });
    });

    $("#shopss4").empty();
    db.collection("Mister").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {

        var item44 = `
          <ons-button id=${doc.data().idmenu} >
               <ons-list-item modifier="material" class="list-item list-item--material"
                   style="background-color: rgb(255, 255, 255);">
                   
                   <div class="center list-item__center list-item--material__center">
                           
                       <span class="list-item__title list-item--material__title" style="font-size: 15pt">${doc.data().name}</span>
                       <span class="list-item__subtitle list-item--material__subtitle">&nbsp;
                           <ons-icon icon="fa-star" size="15px" style="color: rgb(10, 10, 10);">${doc.data().distance}
                           </ons-icon>
                       </span>
                   </div>
                   <div class="left list-item__left list-item--material__left" >
                       <img class="list-item__thumbnail list-item--material__thumbnail"
                       style="background-image: url('${doc.data().url}')">
                   </div>
               
               </ons-list-item>
           </ons-button>
         `
        $("#shopss4").append(item44);

      });
    });



    $("#backhomebtn").click(function () {
      $("#content")[0].load("home.html");
    });



    $("#shopss").click(function () {
      localStorage.setItem("selectedCategory", "1");
      $("#content")[0].load("ListStarbuck.html");
    });
    $("#shopss1").click(function () {
      localStorage.setItem("selectedCategory", "2");
      $("#content")[0].load("ListStarbuck.html");
    });

    $("#shopss2").click(function () {
      localStorage.setItem("selectedCategory", "3");
      $("#content")[0].load("ListStarbuck.html");
    });
    $("#shopss3").click(function () {
      localStorage.setItem("selectedCategory", "4");
      $("#content")[0].load("ListStarbuck.html");
    });
    $("#shopss4").click(function () {
      localStorage.setItem("selectedCategory", "5");
      $("#content")[0].load("ListStarbuck.html");
    });
  }

 
  if (page.id === 'list') {
    console.log("list");
    var category = localStorage.getItem("selectedCategory");
    console.log("categoryPage:" + category);

    $("#head").empty();
    db.collection("shops").where("idmenu", "==", category).get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var item2 = `
        <ons-list-item modifier="material" class="list-item list-item--material"
        style="background-color: rgb(255, 255, 255);">

        <div class="center list-item__center list-item--material__center">

            <span class="list-item__title list-item--material__title" style="font-size: 15pt">&nbsp;&nbsp; ${doc.data().name}</span>
            <span class="list-item__subtitle list-item--material__subtitle">&nbsp;
                <ons-icon icon="fa-star" size="15px" style="color: rgb(10, 10, 10);">${doc.data().distance}
                </ons-icon>
            </span>
        </div>
        <div class="left list-item__left list-item--material__left">
            <img class="list-item__thumbnail list-item--material__thumbnail"
            style="background-image: url('${doc.data().url}')">
        </div>

    </ons-list-item>
       `
          $("#head").append(item2);

        });
      });


    $("#drink").empty();
    db.collection("menu").where("idmenu", "==", category).get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var item3 = `
        <ons-col
        style="background: rgb(255, 255, 255); border: 1px solid white; color: black; flex: 0 0 33%; max-width: 40%;"
        width="20%">
            <ons-list-item>
                    <div class="left list-item__left list-item--material__left">
                            <img class="list-item__thumbnail list-item--material__thumbnail"
                            style="background-image: url('${doc.data().url}')">
                        </div>
            </ons-list-item>
        </ons-col>
       
    <ons-col
    style="background: rgb(255, 255, 255); border: 1px solid white; color: black; flex: 0 0 33%; max-width: 40%;"
    width="50%">
        <ons-list-item>
        ${doc.data().name}
        </ons-list-item>
    </ons-col>

    <ons-col
    style="background: rgb(255, 255, 255); border: 1px solid white; color: black; flex: 0 0 33%; max-width: 30%;"
    width="20%">
        <ons-list-item style="text-align: right;color: black">$${doc.data().price}</ons-list-item>
    </ons-col>

    <ons-col
    style="background: rgb(255, 255, 255); border: 1px solid white; color: black; flex: 0 0 33%; max-width: 30%;"
    width="10%">
        <ons-list-item>
                <ons-icon  icon="fa-plus" onClick="add('${doc.data().name}')"  style="color: rgb(31, 30, 30);" ></ons-icon>
        </ons-list-item>
    </ons-col>
       `
          $("#drink").append(item3);

        });
      });


  }

  

    // $("#cartdetail").empty();

    // localStorage.setItem('additem',name);
    // var Data = localStorage.getItem("additem");
    
    
    // db.collection("menu").where("name", "==", Data).get()
    //   .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       var itemmenu = `
    //       <ons-list>
             
    //        <div id="cartdetail"> 
    //      <ons-row>
    //           <ons-col>
    //                   <ons-list-item >${doc.data().name}</ons-list-item>
    //           </ons-col>
    //           <ons-col>
    //                   <ons-list-header style="text-align: right;color: black; margin-top: 10px;">$${doc.data().price}</ons-list-header> 
    //           </ons-col>
    //       </ons-row>
  
    //                       </div>                                    
  
    //   <ons-list><center>
        
         
    //    `
    //       $("#cartdetail").append(itemmenu);
         

    //     });
      
    //   });
     

  








  if (page.id === 'menuPage') {
    console.log("menuPage");

    $("#login").click(function () {
      $("#content")[0].load("login.html");
      $("#sidemenu")[0].close();
    });

    $("#logout").click(function () {
      //firebase sign out
      firebase.auth().signOut().then(function () {
        // Sign-out successful.
        $("#content")[0].load("login.html");
        $("#sidemenu")[0].close();
      }).catch(function (error) {
        // An error happened.
        console.log(error.message);
      });
    });

    $("#home").click(function () {
      $("#content")[0].load("home.html");
      $("#sidemenu")[0].close();
    });
  }

  if (page.id === 'loginPage') {
    console.log("loginPage");

    $("#signinbtn").click(function () {
      var email = $("#email").val();
      var password = $("#password").val();
      firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
        content.load('home.html');

      }
      )

        .catch(function (error) {
          ons.notification.alert('login filed')
          console.log(error.message);
        });

    });


    $("#signupbtn").click(function () {
      var content = document.getElementById('content');
      content.load('signup.html');
    });


    $("#backhomebtn").click(function () {
      $("#content")[0].load("home.html");
    });
  }

  if (page.id === 'loginPage') {
    console.log("loginPage");

    $("#gbtn").click(function () {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        content.load('home.html');
      }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    });

  }

  if (page.id === 'shop1') {
    console.log("shop1");


    $("#backbtn").click(function () {
      var content = document.getElementById('content');
      content.load('home.html');





    });

  }
  if (page.id === 'signup') {
    console.log("signup");

    $("#createbtn").click(function () {

      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      firebase.auth().createUserWithEmailAndPassword(email, password).then(function (result) {
        ons.notification.alert('Create User Success')
        content.load('login.html');
      })
        .catch(function (error) {
          // Handle Errors here.

          var errorCode = error.code;
          var errorMessage = error.message;

          if (errorCode === 'auth/weak-password') {
            ons.notification.alert('The password is too weak');


          } else {

            ons.notification.alert(errorMessage);
            content.load('login.html');
          }
          console.log(error);


        });




    });

    $("#backhomebtn").click(function () {
      var content = document.getElementById('content');
      content.load('login.html');
    });
  }

  if (page.id === 'list') {
    console.log("list");

    $("#backbtn").click(function () {
      var content = document.getElementById('content');
      content.load('shop1.html');
    });

    $("#cfbtn").click(function () {
      var content = document.getElementById('content');
      var category = localStorage.getItem("selectedCategory");
      console.log("categoryPage:" + category);
      content.load('cart1.html');
    });

    
  }


  if (page.id === 'cart1') {
    console.log("cart1");

    $("#backbtn").click(function () {
      var content = document.getElementById('content');
      content.load('ListStarbuck.html');
    });


  }





});

var dataCart = [];
function add(name){
 
localStorage.setItem('additem',name);
var Data = localStorage.getItem("additem");
console.log(Data);
dataCart.push(Data);

ons.notification.toast('You have added a product ', {
  timeout: 1000});
  displayCart();
 } 



 function displayCart(){ 
  
  console.log(dataCart);

  // db.collection("menu").where("name", "==", Data).get()
  // //   .then((querySnapshot) => {
  // //     querySnapshot.forEach((doc) => {
   dataCart.forEach(function(dataCart){
   apr = db.collection("menu").where("name", "==",dataCart)
  .get().then(function (listitem) {
      listitem.forEach((doc) => {
                   
              var itemlist = `
              <ons-list>
                 
               <div id="cartdetail"> 
             <ons-row>
                  <ons-col>
                          <ons-list-item >${doc.data().name}</ons-list-item>
                  </ons-col>
                  <ons-col>
                          <ons-list-header style="text-align: right;color: black; margin-top: 10px;">$${doc.data().price}</ons-list-header> 
                  </ons-col>
              </ons-row>
      
                              </div>                                    
      
          <ons-list><center>
            
             
           `
              $("cartdetail").append(itemlist);

        
             
    
            });
          
          });
      
      
     
        
    
    })
  
    
 
}




