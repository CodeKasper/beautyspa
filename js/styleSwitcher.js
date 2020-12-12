
function setActiveStyle(ColorName) {
    $(".alternate-style").attr("disabled", "true");
    $(".alternate-style[title="+ColorName+"]").removeAttr("disabled");
}

$(".toggle-style-switcher").click(function(){
    $(".style-switcher").toggleClass("open");
})