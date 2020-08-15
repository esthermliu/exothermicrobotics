$.ajax({
    url: "https://api.vexdb.io/v1/get_events?program=VRC&country=United States&team=10C&season=In The Zone&status=all",
    dataType: "json",
    type: "get",
    cache: false,
    success: function(data) {
      original4(data.result);
    }
});

function original4(otherobj) { 
       $.ajax({
            url: "https://api.vexdb.io/v1/get_skills?team=10C&season=In The Zone",
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
                    $('#inTheZoneSkills').append('<div class = "statbox"><div class = "rightSectionEvent"> <p class = "firstOfSection">' + value.name + '</p><p>' + value.rank + '</p><p>' + value.score + '</p></div></div>'); 
                });
            }
       });
}