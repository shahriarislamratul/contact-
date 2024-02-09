function emailSend() {

var username = document.document.getElementById('name').value;

  var phone = document.document.getElementById('phone').value;

  var email = document.document.getElementById('email').value;

  var massageBody = "Name" + username + "</br> Phone " + phone + "</br> Email " + email;


  
  Email.send({
      Host : "smtp.elasticemail.com",
      Username : "shahriarislamratul5@gmail.com",
      Password : "BA40D9F8E85DA1A85C7F162FBE90D6483222",
      To : 'shahriarislamratul5@gmail.com',
      From : "shahriarislamratul5@gmail.com",
      Subject : "This is the subject",
      Body : massageBody
  }).then(
    message => {
      if (massage=='OK') {
         swal("Secussful", "You clicked the button!", "success");
      }
      else{
        swal("Error", "Something went wrong!", "error")
      }
    }
  );
}
