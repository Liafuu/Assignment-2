

function showScores(all = true) {
    const APIKEY = "63d604e03bc6b255ed0c43db";

    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://idassign2-6b28.restdb.io/rest/nc-score",
        "method": "GET",
        "dataType": "json",
        "headers": {
            "content-type": "application/json",
            "x-apikey": APIKEY,
            "cache-control": "no-cache"
        },
    }

    $.ajax(settings).done(function (response) {
        let content = "";
        response.forEach(User => {
            content += "<tr><td>" +
            User.User.map(u => u.Username).join("</td>") +
            "<td>&nbsp;</td><td>" +
            User.NC_Score + "</td><tr>";
        })

        $("#ncscore-list tbody").html(content);
    })

    // FGO Scores

    let settings2 = {
        "async": true,
        "crossDomain": true,
        "url": "https://idassign2-6b28.restdb.io/rest/fgo-score",
        "method": "GET",
        "dataType": "json",
        "headers": {
            "content-type": "application/json",
            "x-apikey": APIKEY,
            "cache-control": "no-cache"
        },
    }

    $.ajax(settings2).done(function (response) {
        let content = "";
        response.forEach(User => {
            content += "<tr><td>" +
            User.User.map(u => u.Username).join("</td>") +
            "<td>&nbsp;</td><td>" +
            User.FGO_Score + "</td><tr>";
        })

        $("#fgoscore-list tbody").html(content);
    })
}
