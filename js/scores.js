function showScores(all = true) {
    const APIKEY = "63d604e03bc6b255ed0c43db";

    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://idassign2-6b28.restdb.io/rest/nc-score",
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "x-apikey": APIKEY,
            "cache-control": "no-cache"
        },
    }

    $.ajax(settings).done(function (response) {
        let content = "";
        for (var i = 0; i < response.length; i++) {
            content = `${content}<tr id='${response[i]._id}'><td>${response[i].Username}</td>
            <td>&nbsp</td><td>${response[i].NC_Score}</td></tr>`
            /*if (i == `${response<tr id='${response[i]._id}'>[i].NC_Score}`) {
                content = `${content}<td>${response[i].Username}</td>
                <td>${response[i].NC_Score}</td>`;
                
            } 
            else {$("#ncscore-list tbody").html("you suck");}   */
        }
        $("#ncscore-list tbody").html(content);
    })
    
}
