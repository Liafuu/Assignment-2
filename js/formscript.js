//[STEP 0]: Make sure our document is A-OK
$(document).ready(function () {
  //what kind of interface we want at the start 
  const APIKEY = "63d604e03bc6b255ed0c43db";
  getContacts();
  $("#update-contact-container").hide();
  $("#add-update-msg").hide();

  //[STEP 1]: Create our submit form listener
  $("#contact-submit").on("click", function (e) { 
    //prevent default action of the button 
    e.preventDefault();

    //[STEP 2]: let's retrieve form data
    //for now we assume all information is valid
    //you are to do your own data validation
    let formName = $("#form-username").val();
    let formEmail = $("#form-email").val();
    let formPassword = $("#form-passw").val();

    //[STEP 3]: get form values when user clicks on send
    //Adapted from restdb api
    let jsondata = {
      "Username": formName,
      "Email": formEmail,
      "Password": formPassword
    };

    //[STEP 4]: Create our AJAX settings. Take note of API key
    let settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://idassign2-6b28.restdb.io/rest/login",
      "method": "POST", //[cher] we will use post to send info
      "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
      },
      "processData": false,
      "data": JSON.stringify(jsondata),
      "beforeSend": function(){
        //@TODO use loading bar instead
        //disable our button or show loading bar
        $("#contact-submit").prop( "disabled", true);
        //clear our form using the form id and triggering it's reset feature
        $("#add-contact-form").trigger("reset");
      }
    }

    //[STEP 5]: Send our ajax request over to the DB and print response of the RESTDB storage to console.
    $.ajax(settings).done(function (response) {
      console.log(response);
      
      $("#contact-submit").prop( "disabled", false);
      
      //@TODO update frontend UI 
      $("#add-update-msg").show().fadeOut(3000);
    });
  });//end click 
})  

//DELETE Based on the ID chosen
/*
var settings = {
  "async": true,
  "crossDomain": true,
  "url": `https://idassign2-6b28.restdb.io/rest/login/${id}`,
  "method": "DELETE",
  "headers": {
    "content-type": "application/json",
    "x-apikey": APIKEY,
    "cache-control": "no-cache"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});

var jsondata = {"field1": "xyz","field2": "abc"}; */
