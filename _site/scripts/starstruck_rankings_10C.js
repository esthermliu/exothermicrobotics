$.ajax({
    url: "https://api.vexdb.io/v1/get_events?program=VRC&country=United States&team=10C&season=Starstruck&status=all",
    dataType: "json",
    type: "get",
    cache: false,
    success: function(data) {
      original5(data.result);
    }
});


function original5(otherobj) { 
       $.ajax({
            url: "https://api.vexdb.io/v1/get_rankings?team=10C&season=Starstruck",
            dataType: "json",
            type: "get",
            cache: false,
            success: function(data) {
                $(data.result).each(function(index, value) {
                    $(otherobj).each(function(i, value2) {
                          if (data.result[index].sku === otherobj[i].sku) {
                              data.result[index].name = otherobj[i].name;
                              //console.log(data.result, "hello");
                          }
                    });
                    if (index === 0) {
                        value.name = "Pacific Northwest Regional Championship";
                    }
                    $('#starstruckRanking').append('<div class = "statbox"><div class = "rightSectionEventRanking"> <p class = "firstOfSection">' + value.name + '</p><p>' + value.rank + '</p><p>' + value.wins + '-' + value.losses + '-' + value.ties + '</p><p>' + value.wp + '/' + value.ap + '/' + value.sp + '</p><p>' + value.max_score + '</p></div></div>'); 
                });
            }
       });
}