$.ajax({
    url: "https://api.vexdb.io/v1/get_events?program=VRC&country=United States&team=10C&season=In The Zone&status=all",
    dataType: "json",
    type: "get",
    cache: false,
    success: function(data) {
      original3(data.result);
    }
});


function original3(otherobj) { 
       $.ajax({
            url: "https://api.vexdb.io/v1/get_rankings?team=10C&season=In The Zone",
            dataType: "json",
            type: "get",
            cache: false,
            success: function(data) {
                //console.log("over here");
                //console.log(otherobj);
                $(data.result).each(function(index, value) {
                    $(otherobj).each(function(i, value2) {
                          if (data.result[index].sku === otherobj[i].sku) {
                              data.result[index].name = otherobj[i].name;
                              //console.log(data.result, "hello");
                          }
                      //console.log(otherobj);
                    });
                    //console.log(value.rank);
                    $('#inTheZoneRanking').append('<div class = "statbox"><div class = "rightSectionEventRanking"> <p class = "firstOfSection">' + value.name + '</p><p>' + value.rank + '</p><p>' + value.wins + '-' + value.losses + '-' + value.ties + '</p><p>' + value.wp + '/' + value.ap + '/' + value.sp + '</p><p>' + value.max_score + '</p></div></div>'); 
                });
            }
       });
}