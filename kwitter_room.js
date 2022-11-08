const firebaseConfig = {
  apiKey: "AIzaSyDTdoZxf-sJ8yEysa4wZIkp0vMjU_4uwFQ",
  authDomain: "kwitter-8ba1b.firebaseapp.com",
  databaseURL: "https://kwitter-8ba1b-default-rtdb.firebaseio.com",
  projectId: "kwitter-8ba1b",
  storageBucket: "kwitter-8ba1b.appspot.com",
  messagingSenderId: "589079846447",
  appId: "1:589079846447:web:03fdf51034df05ede230da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
     user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome"+ user_name+"!";
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
      

      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      message_data = childData;
console.log(firbase_message_id);
console.log(message_data);
name = message_data('name');
message = message_data('message');
like = message_data('like');
name_with_tag = "<h4>"+ name +"<img class='user_tick' src='tick.png'></4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

row = name_with_tag + message_with_tag +like_button + span_with_tage;
document.getElementById("output").innerHTML += row;







      console.log("Room Name - "+ Room_name);
      row = "<div class='room_name' id="+Room_name+" onclick='redirectToRoomName(this.id)' >"+ Room_name +"</div><hr>";
      document.getElementById("output").innerHTml += row;
      
      
      });});}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}

function updateLike(message_id)
{
      console.log("clicked on like button -" + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = number(likes) + 1;
      console.log(updated_likes);

      firebase.datebase().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}
