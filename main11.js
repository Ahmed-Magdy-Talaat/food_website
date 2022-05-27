function verifyPassword() {
    var pw = document.getElementById("pw").value;
    var phone = document.getElementById("phonenumber").value;
    var em = document.getElementById("email").value;
    var validem = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var pw2=document.getElementById("pw2").value;
    //phone length
    if (phone.length < 11) {
      document.getElementById("messagephone").innerHTML = "**The phone number is invalid";
      return false;
    }
    // Email
    if (!em.match(validem)) {
      document.getElementById("messageem").innerHTML = "**the email is invalid";
      return false;
    }
    // check first char
    if (pw[0].toLowerCase() == pw[0]) {
      document.getElementById("message").innerHTML = "**Password must start with capital letter";
      return false;
    }
  
    // check empty password   
    if (pw == "") {
      document.getElementById("message").innerHTML = "**Fill the password please!";
      return false;
    }
  
    // minimum password length  
    if (pw.length < 8) {
      document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";
      return false;
    }
  
    // maximum password length 
    if (pw.length > 8) {
      document.getElementById("message").innerHTML = "**Password length must not exceed 8 characters";
      return false;
    }
    // special char
    if (pw.search(/[!\@\#\$\%\^\&\*\(\)\_\+\-\=\<\>\?\,]/) == -1) {
      document.getElementById("message").innerHTML = "**password should contain at least one special character";
      return false;
    }
    // one digit
    if (pw.search(/[0-9]/) == -1) {
      document.getElementById("message").innerHTML = "**password should contain at least one digit";
      return false;
    }
    // white spaces
    if (pw.search(/[ ]/) != -1) {
      document.getElementById("message").innerHTML = "**password should not contain white spaces";
      return false;
    }
    if(pw != pw2){
      document.getElementById("message2").innerHTML = "**Two passwords aren't matching each other ";
      return false;
    }
    
  }  
  