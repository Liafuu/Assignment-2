function saveNCScore() {
  const APIKEY = "63d604e03bc6b255ed0c43db";
  loginEmail = $('#login-email').val();
  loginPass = $('#login-passw').val();
  playerScore = document.getElementById('right-answers').innerHTML; 
  

  let settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://idassign2-6b28.restdb.io/rest/login",
      "method": "GET",
      "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
      },
  }

  $.ajax(settings).done(function (response) {
    for (var i = 0; i < response.length; i++) {
      if(loginEmail == `${response[i].Email}` && loginPass == `${response[i].Password}`) {
        let loginID = `${response[i]._id}`;
        let loginName = `${response[i].Username}`;

        let jsondata2 = {
          "User": [{
            "_id": loginID,
            "Username": loginName,
            "Email": loginEmail,
            "Password": loginPass
          }],
          "NC_Score": playerScore
        };

        let settings2 = {
          "async": true,
          "crossDomain": true,
          "url": "https://idassign2-6b28.restdb.io/rest/nc-score",
          "method": "POST",
          "headers": {
              "content-type": "application/json",
              "x-apikey": APIKEY,
              "cache-control": "no-cache"
          },
          "processData": false,
          "data": JSON.stringify(jsondata2),
          "beforeSend": function(){
              $("login-button").prop("disabled", true);
          }
        }

        $.ajax(settings2).done(function (response) {
            console.log(response);
            document.getElementById('login-modal').style.display = "none";
            handleEndGame();
            document.getElementById('score-alert').style.display = "flex";
            document.getElementById("score-submit").style.display = "none";
        })

      }
    }
  });

}


function saveFGOScore() {
  const APIKEY = "63d604e03bc6b255ed0c43db";
  loginEmail = $('#login-email').val();
  loginPass = $('#login-passw').val();
  playerScore = document.getElementById('right-answers').innerHTML; 
  

  let settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://idassign2-6b28.restdb.io/rest/login",
      "method": "GET",
      "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
      },
  }

  $.ajax(settings).done(function (response) {
    for (var i = 0; i < response.length; i++) {
      if(loginEmail == `${response[i].Email}` && loginPass == `${response[i].Password}`) {
        let loginID = `${response[i]._id}`;
        let loginName = `${response[i].Username}`;

        let jsondata2 = {
          "User": [{
            "_id": loginID,
            "Username": loginName,
            "Email": loginEmail,
            "Password": loginPass
          }],
          "FGO_Score": playerScore
        };

        let settings2 = {
          "async": true,
          "crossDomain": true,
          "url": "https://idassign2-6b28.restdb.io/rest/fgo-score",
          "method": "POST",
          "headers": {
              "content-type": "application/json",
              "x-apikey": APIKEY,
              "cache-control": "no-cache"
          },
          "processData": false,
          "data": JSON.stringify(jsondata2),
          "beforeSend": function(){
              $("login-button").prop("disabled", true);
          }
        }

        $.ajax(settings2).done(function (response) {
            console.log(response);
            document.getElementById('login-modal').style.display = "none";
            handleEndGame();
            document.getElementById('score-alert').style.display = "flex";
            document.getElementById("score-submit").style.display = "none";
        })

      }
    }
  });

}
