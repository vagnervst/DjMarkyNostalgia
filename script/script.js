$(document).ready(function() {
    
    function startAnimation() {
        var circle = $("#circle");
        
        circle.animate({
            width: 120,
            height: 120
        }, 150)
        
        setTimeout(function(){
            circle.animate({
                width: 60,
                height: 60
            }, 150)
        }, 100)
        
        setTimeout(function(){
            circle.animate({
                width: 120,
                height: 120
            }, 150)
        }, 100)
        
        setTimeout(function(){
            circle.animate({
                width: 60,
                height: 60
            }, 150)
        }, 100)
        
        setTimeout(function(){
            circle.animate({
                width: 120,
                height: 120
            }, 150)
        }, 100)
        
        setTimeout(function(){
            circle.animate({
                width: 0,
                height: 0
            }, 150)
        }, 2000)
        
        setTimeout(function(){
            circle.animate({
                width: "100vw",
                height: "100vh",
                borderRadius: 0
            }, 150)
            
            circle.animate({
                opacity: 0
            }, 4000, function() {
                $(circle).css("display", "none");
                $("header").css("display", "block");
                $("main").css("display", "block");
                $("footer").css("display", "block");
                
                setTimeout( function() {
                    $("header").animate({
                        marginTop: 0
                    }, 1000)
                }, 500 )
                
                setTimeout( function() {
                    $("main").animate({
                        marginTop: 0
                    }, 1000)
                }, 800 )
                
                setTimeout( function() {
                    $("footer").animate({
                        marginTop: 0
                    }, 1000)
                }, 1100 )
            })
            
            
        }, 2900)        
        
        setTimeout(function(){                        
            
            $("#button1").animate({
                marginTop: 0
            }, 200)
            
            setTimeout(function() {
                $("#button2").animate({
                    marginTop: 0
                }, 200)
            }, 150)
                
            setTimeout(function() {
                $("#button3").animate({
                    marginTop: 0
                }, 200)
            }, 250)
            
            setTimeout(function() {
                $("#button4").animate({
                    marginTop: 0
                }, 200)
            }, 350)
                 
        }, 9200)
            
        
    }
    
    setTimeout(startAnimation, 7200);
})