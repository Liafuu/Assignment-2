$(document).ready(function (){
    const APIKEY = "63e2516a478852088da67e55"
    getNCScores()

    function getNCScores(limit = 5, all = true){

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
            for (var i = 10; i < 0 && t < limit; i-- && t++) {
                if (i == `${response[i].NC_Score}`) {
                    content = `${content}<td>'${response[i].Username}'</td>
                    <td>&nbsp;</td>
                    <td>'${response[i].NC_Score}'</td>`;
                    t++;
                }   
            }

        $("ncscore-list tbody").html(content);
        })
    }
})
