$(document).ready(function () {
    randomizeSeeker();
});


function randomizeSeeker(){
  var random = Math.random();
  if (random > 0.7) {
    document.getElementById("randomSeeker").className = "animated rubberBand";
  }
  else if (random > 0.4){
    document.getElementById("randomSeeker").className = "animated jello";
  }
  else {
    document.getElementById("randomSeeker").className = "animated wobble";     
  }
}


$(function(){
    $('#birthday').pickadate({ format: 'mmmm, d' });

$('.form-check-input').each(function () {
    $(this).prop('checked', false);
});

$('.form-check-input').on('change', function () {

    if ( (this.id) == "all") {

        if (document.getElementById("all").checked == true) {
            document.getElementById("red").checked = true
            document.getElementById("blue").checked = true
            document.getElementById("green").checked = true
            $('#' + "red" + 'Img').css('visibility', 'visible')
            $('#' + "red" + 'Img').removeClass().addClass('animated bounceInDown')
            $('#' + "blue" + 'Img').css('visibility', 'visible')
            $('#' + "blue" + 'Img').removeClass().addClass('animated bounceInDown')
            $('#' + "green" + 'Img').css('visibility', 'visible')
            $('#' + "green" + 'Img').removeClass().addClass('animated bounceInDown')
        }
        else {
            document.getElementById("red").checked = false
            document.getElementById("blue").checked = false
            document.getElementById("green").checked = false
            $('#' + "red" + 'Img').addClass('animated bounceOutUp');
            $('#' + "blue" + 'Img').addClass('animated bounceOutUp');
            $('#' + "green" + 'Img').addClass('animated bounceOutUp');
        }

    }
    else {
        $('#' + this.id + 'Img').css('visibility', 'visible')

        $(this).is(':checked') ?
        $('#' + this.id + 'Img').removeClass().addClass('animated bounceInDown') :
        $('#' + this.id + 'Img').addClass('animated bounceOutUp');
    }

});

});


$('#submit').on('click', function(e) {
    if (document.getElementById("redImg").className == "animated bounceInDown") {}
    else if (document.getElementById("greenImg").className == "animated bounceInDown") {}
    else if (document.getElementById("blueImg").className == "animated bounceInDown") {}
    else {
        $('#toast').toast({ autohide: true }).toast('show');
    }
});
