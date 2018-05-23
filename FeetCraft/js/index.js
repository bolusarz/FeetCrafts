$(document).ready(function(){
        $("input").hide();
        $("[for='user']").click(function () {
            $("#user").slideDown("fast");
            $(".divide1").hide();
            $(this).css("border-bottom", "none");
        });

        $("[for='pwd']").click(function () {
            $("#pwd").slideDown("fast");
            $(".divide2").hide();
            $(this).css("border-bottom", "none");

        });


});
