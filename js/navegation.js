$(document).ready(function(){
    
    $(".link").on("click", function(){

        var link = $(this).attr('href');
    
        console.log('Click en '+ link);

        switch(link){

            case "#home":
                $('.banner').css('display', 'block');
                $('.contenido').css('display', 'block');
                $('.service').css('display', 'none');
                break;

            case "#services":
                $('.banner').css('display', 'none');
                $('.contenido').css('display', 'none');
                $('.service').css('display', 'block');
                break;

            case "#projects":
                $('.banner').css('display', 'none');
                $('.contenido').css('display', 'none');

                break;

            case "#contact":


                break;    
        }
        
    });

});

