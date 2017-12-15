var compiled = _.template($("#showMoviesModel").html());
getPage(1);
getTvPage(1);

function getPage(num){
    $.get("./api/getFilmData.php?page=" + num, function(result){
        $("#appendModelData").html("");
        var result = JSON.parse(result)["subjects"];
        for(var i=0; i<result.length; i++){
            var htmlstring = compiled(result[i]);
            $("#appendModelData").append($(htmlstring));
        }
    })
}

function getTvPage(num){
    $.get("./api/getTVData.php?page=" + num, function(result){
        $("#appendTvModelData").html("");
        var result = JSON.parse(result)["subjects"];
        for(var i=0; i<result.length; i++){
            var htmlstring = compiled(result[i]);
            $("#appendTvModelData").append($(htmlstring));
        }
    })
}