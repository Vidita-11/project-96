var firebaseConfig = {
    apiKey: "AIzaSyAMj3Tpz6O8D3nw1A0Qcq1z7ewdTA-4PMw",
    authDomain: "let-s-chat-fd69f.firebaseapp.com",
    databaseURL: "https://let-s-chat-fd69f-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-fd69f",
    storageBucket: "let-s-chat-fd69f.appspot.com",
    messagingSenderId: "784016131953",
    appId: "1:784016131953:web:954b00afae649bf16f18d0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "addinguser"
      });
  }
