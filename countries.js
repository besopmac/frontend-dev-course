$(".btn").click(function(){
    $(".text").text("hold on...");
    
    $.ajax({
        type: "GET",
        url: "https://restcountries.eu/rest/v2/",
        success: function(data) {
            $(".text").html("");
            for(var i = 0; i < data.length; i++) {
                $(".text").append("<p>"+ data[i].name +"</p>");
            }
        }
    });
});