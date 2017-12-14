$(".btn").click(function(){
    $(".text").text("hold on...");
    
    $.ajax({
        type: "GET",
        url: "https://restcountries.eu/rest/v2/",
        success: function(response) {
            $(".text").html("");
            for(var i = 0; i < response.length; i++) {
                var flag = response[i].flag;
                var name = response[i].name; 
                $(".text").append("<p><img src='"+ flag +"' alt="+ name +"/></p>");
            }
        }
    });
});