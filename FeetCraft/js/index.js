$(document).ready(function(){
    $("input").hide();
    $("[for='user']").click(function () {
        $("#user").slideDown("fast");
        $(this).css("border-bottom", "none");
    });
    $("[for='password']").click(function () {
        $("#password").slideDown("fast");
        $(this).css("border-bottom", "none");
    });
});
