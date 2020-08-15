$.ajax({
    url: "https://api.vexdb.io/v1/get_events?program=VRC&country=United States&team=10C&season=Starstruck&status=all",
    dataType: "json",
    type: "get",
    cache: false,
    success: function(data) {
      original6(data.result);
    }
});


function original6(otherobj) { 
       $.ajax({
            url: "https://api.vexdb.io/v1/get_skills?team=10C&season=Starstruck",
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
                    if (index === 0 || index === 1 || index === 2) {
                        value.name = "Pacific Northwest Regional Championship";
                    }
                    //console.log(value.rank);
                    $('#starstruckSkills').append('<div class = "statbox"><div class = "rightSectionEvent"> <p class = "firstOfSection">' + value.name + '</p><p>' + value.rank + '</p><p>' + value.score + '</p></div></div>'); 
                });
            }
       });
}