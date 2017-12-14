$(".btn").click(function(){
    $(".text").text("hold on...");
    
    $.ajax({
        type: "GET",
        url: "https://restcountries.eu/rest/v2/",
        success: function(data) {
            $(".text").html("");
            for(var i = 0; i < data.length; i++) {
                var flag = data[i].flag;
                var name = data[i].name; 
                $(".text").append("<p><img src='"+ flag +"' alt="+ name +"/></p>");
            }
        }
    });
});