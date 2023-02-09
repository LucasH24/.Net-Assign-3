$(document).keydown(function(e) {
    if (e.keyCode == 27) {
        $('#toast').toast({ autohide: false }).toast('hide');
    }
});

$(function(){
    // preload audio
    var toast = new Audio('media/toast.wav');

    $('.code').on('click', function(e) {
        e.preventDefault();
        // first pause the audio (in case it is still playing)
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        // play audio
        toast.play();
           
        var value;
        var code;

            switch ( $( ".code" ).index( this ) ) {
              case 0 :
                value = $("#btn1").attr("data-product");
                code = $("#btn1").attr("data-code");
                break;
              case 1 :
                value = $("#btn2").attr("data-product");
                code = $("#btn2").attr("data-code");
                break;
              case 2 :
                value = $("#btn3").attr("data-product");
                code = $("#btn3").attr("data-code");
                break;
            }

        $( "#product" ).text( value );
        $( "#code" ).text( code );


        $('#toast').toast({ autohide: false }).toast('show');
    });
});