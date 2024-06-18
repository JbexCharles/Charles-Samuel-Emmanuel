
$(document).ready(function(){
    $('.sidenav').sidenav();
});

$(document).ready(function(){
    $('.modal').modal();
});

$(document).ready(function(){
    $('scrollspy').scrollSpy();
});

$('#myForm').submit(function(event) {
    event.preventDefault(); // prevent default form submission
    var formData = $(this).serialize(); // serialize form data
    $.ajax({
      type: 'POST',
      url: '(sanojbex@gmail.com)', // my email server URL
      data: formData,
      success: function(response) {
        console.log(response); // log the response from the server
        Materialize.toast('Email sent successfully!', 4000); // show a toast message
      },
      error: function(error) {
        console.log(error); // log the error
        Materialize.toast('Error sending email!', 4000); // show a toast message
      }
    });
  });
  
