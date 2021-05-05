// Your web app's Firebase configuration
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
    user_name = localStorage.getElement("user_name");
    document.getElementById("user_name").innerHTML = "welcome " + user_name + "! ";
    function addRoom()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose: "Adding Room Name"
          });
          localStorage.setItem("room_name", room_name);
          window.location = "let's chat_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name- " + Room_names);
      row = "<div class= 'room_name' id= " + Room_names + "onclick = 'redirectToRoomName(this.id)'> #"+ Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "let's chat_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}