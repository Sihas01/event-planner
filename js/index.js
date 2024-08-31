function service() {
   window.location = "Services.html"
}

function packagers() {
   window.location = "Packagers.html"
}

function register() {
   window.location = "register.html"
}


function signIn() {
   var email = document.getElementById("email");
   var password = document.getElementById("password");

   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (email.value.trim() === '') {
      alert('Please enter your email.');
   } else if (!emailRegex.test(email.value.trim())) {
      alert('Please enter a valid email address.');
   } else if(password.value.trim() === '') {
      alert('Please enter your password.');
   }else{
      alert("Login Success!!");
   }


}

function signUp(){

   var fname = document.getElementById("fname");
   var lname = document.getElementById("lname");
   var email = document.getElementById("email");
   var password = document.getElementById("password");

   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if(fname.value.trim() === ''){
      alert('Please enter your first name');
   }else if(lname.value.trim() === ''){
      alert('Please enter your last name')
   }else if (email.value.trim() === '') {
      alert('Please enter your email.');
   } else if (!emailRegex.test(email.value.trim())) {
      alert('Please enter a valid email address.');
   } else if(password.value.trim() === '') {
      alert('Please enter your password.');
   }else{
      alert("User register successfully!!");
   }


}