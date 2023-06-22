$(function() {

    var newHash = "",
        $mainContent = $("#contenido");

    
    $("nav").delegate("a", "click", function() {
        window.location.hash = $(this).attr("href");
        return false;
    });


    $(window).bind('hashchange', function(){
    
        newHash = window.location.hash.substring(1);
        
        if (newHash) {
            $mainContent
                .find("#guts")
                .fadeOut(200, function() {
                    $mainContent.hide().load(newHash + " #guts", function() {
                        $mainContent.fadeIn(500, function() {

                        });
                        
                        $("nav a").removeClass("current");
                        $("nav a[href="+newHash+"]").addClass("current");
                    });
                });
        };
        
    });
    
    $(window).trigger('hashchange');

});