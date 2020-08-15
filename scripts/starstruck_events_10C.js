$.ajax({
    url: "https://api.vexdb.io/v1/get_events?program=VRC&country=United States&team=10C&season=Starstruck&status=all",
    dataType: "json",
    type: "get",
    cache: false,
    success: function(data) {
        $(data.result).each(function(index, value) {
            //console.log(value.name);
            var date = value.start.substr(0, 10);
            $('#starEvents').append('<div class = "statbox"><div class = "rightSectionEvent"> <p class = "firstOfSection">' + value.name + '</p><p>' + date + '</p></div></div>'); 

        });
    }
});