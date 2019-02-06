$(document).ready(function(){

  $(".sun").hover(function(){
    $(this).css("background-image", "linear-gradient(#fbb040, #1b75bc)");
    }, function(){
    $(this).css("background-image", "linear-gradient(white, white)");
  });

  $(".mon").hover(function(){
      $(this).css("background-image", "linear-gradient(#fab49b, #238e5e)");
    }, function(){
    $(this).css("background-image", "linear-gradient(white, white)");
  });

  $(".tue").hover(function(){
      $(this).css("background-image", "linear-gradient(#f9e752, #62449b)");
    }, function(){
    $(this).css("background-image", "linear-gradient(white, white)");
  });

  $(".wed").hover(function(){
      $(this).css("background-image", "linear-gradient(#e3ff86, #65381c)");
    }, function(){
    $(this).css("background-image", "linear-gradient(white, white)");
  });

  $(".thu").hover(function(){
      $(this).css("background-image", "linear-gradient(#eecde2, #35459c)");
    }, function(){
    $(this).css("background-image", "linear-gradient(white, white)");
  });

   $(".fri").hover(function(){
      $(this).css("background-image", "linear-gradient(#ffe1bb, #026684)");
    }, function(){
    $(this).css("background-image", "linear-gradient(white, white)");
  });

     $(".sat").hover(function(){
      $(this).css("background-image", "linear-gradient(#d2edf3, #663434)");
    }, function(){
    $(this).css("background-image", "linear-gradient(white, white)");
  });

  $(".text1").hover(function(){
  $("#sun1").css('display','block');},
  function(){
    $("#sun1").css('display','none');
  });

    $(".text2").hover(function(){
  $("#mon1").css('display','block');},
  function(){
    $("#mon1").css('display','none');
  });

     $(".text3").hover(function(){
  $("#mon2").css('display','block');},
  function(){
    $("#mon2").css('display','none');
  });

     $(".text4").hover(function(){
  $("#tue1").css('display','block');},
  function(){
    $("#tue1").css('display','none');
  });

      $(".text5").hover(function(){
  $("#tue2").css('display','block');},
  function(){
    $("#tue2").css('display','none');
  });

            $(".text6").hover(function(){
  $("#tue3").css('display','block');},
  function(){
    $("#tue3").css('display','none');
  });

            $(".text7").hover(function(){
  $("#tue4").css('display','block');},
  function(){
    $("#tue4").css('display','none');
  });

            // wednesday


            $(".text8").hover(function(){
  $("#wed1").css('display','block');},
  function(){
    $("#wed1").css('display','none');
  });
            $(".text9").hover(function(){
  $("#wed2").css('display','block');},
  function(){
    $("#wed2").css('display','none');
  });
            $(".text10").hover(function(){
  $("#wed3").css('display','block');},
  function(){
    $("#wed3").css('display','none');
  });
             $(".text11").hover(function(){
  $("#wed4").css('display','block');},
  function(){
    $("#wed4").css('display','none');
  });
              $(".text12").hover(function(){
  $("#wed5").css('display','block');},
  function(){
    $("#wed5").css('display','none');
  });

$("div[class^=text]").css("z-index","100");


$(".text13").hover(function(){
  $("#thu").css('display','block');},
  function(){
    $("#thu").css('display','none');
  });

$(".text14").hover(function(){
  $("#fri").css('display','block');},
  function(){
    $("#fri").css('display','none');
  });
$(".text15").hover(function(){
  $("#fri2").css('display','block');},
  function(){
    $("#fri2").css('display','none');
  });
$(".text16").hover(function(){
  $("#sat").css('display','block');},
  function(){
    $("#sat").css('display','none');
  });

// Mobile

$(window).on("load resize", checkPosition)
var sun = $("#sun1");
var mon1 = $("#mon1");
var mon2 = $("#mon2");

function checkPosition() {
  if ($(window).width() < 700) {
    $(window).scroll(function() {
      // if ($(window).scrollTop() > 500) {
      //   $(mon1).show();}
      if ($(window).scrollTop() > 40) {
        $(sun).show();
        $(".text1").css("opacity","1");
        $('.sun').css("background-image", "linear-gradient(#fbb040, #1b75bc)");} 
            else {
              $(sun).hide();
              $(".text1").css("opacity","0");
              $('.sun').css("background-image", "linear-gradient(white, white)");}
        if ($(window).scrollTop() > 500) {
        $(sun).hide();
        $(mon1).show();
        $(".text2").css("opacity","1");
        $('.mon').css("background-image", "linear-gradient(#fab49b, #238e5e)");}
            else {
              $(mon1).hide();
              $(".text2").css("opacity","0");}
        if ($(window).scrollTop() > 800) {
        $(mon1).hide(); 
        $(mon2).show();
        $(".text2").css("opacity","0");
        $(".text3").css("opacity","1");}
             else {
              $(mon2).hide();
              $(".text3").css("opacity","0");
              $('.mon').css("background-image", "linear-gradient(white, white)");}

              // Tuesday

        if ($(window).scrollTop() > 1500) {
        $(mon2).hide(); 
        $('#tue1').show();
        $(".text4").css("opacity","1");
        $('.tue').css("background-image", "linear-gradient(#f9e752, #62449b)");}
             else {$("#tue1").hide();
                   $('.tue').css("background-image", "linear-gradient(white, white)");}
        if ($(window).scrollTop() > 1600) {
        $("#tue1").hide(); $('#tue2').show()}
             else {$("#tue2").hide();}
        if ($(window).scrollTop() > 1700) {
        $("#tue2").hide(); $('#tue3').show()}
             else {$("#tue3").hide();}
        if ($(window).scrollTop() > 1800) {
        $("#tue3").hide(); $('#tue4').show()}
             else {$("#tue4").hide();}
        if ($(window).scrollTop() > 1800) {
        $("#tue3").hide(); $('#tue4').show()}
             else {$("#tue4").hide();}

             // wednesday

        if ($(window).scrollTop() > 2200) {
        $("#tue4").hide(); 
        $('#wed1').show();
        $(".text8").css("opacity","1");
        $('.wed').css("background-image", "linear-gradient(#e3ff86, #65381c)");}
             else { $("#wed1").hide();
                    $(".text8").css("opacity","0");
                    $('.wed').css("background-image", "linear-gradient(white, white)");}
        if ($(window).scrollTop() > 2300) {
        $("#wed1").hide(); 
        $('#wed2').show();}
              else {$("#wed2").hide()}
        if ($(window).scrollTop() > 2400) {
        $("#wed2").hide(); 
        $('#wed3').show();}
              else {$("#wed3").hide();
                    $("#wed2").hide();}
        if ($(window).scrollTop() > 2500) {
        $("#wed3").hide(); 
        $('#wed4').show();}
              else {$("#wed4").hide();}
                  if ($(window).scrollTop() > 2600) {
        $("#wed4").hide(); 
        $('#wed5').show();
        $(".text12").css("opacity","1");
        $(".text8").css("opacity","0");}
              else {
                $("#wed5").hide();
                $(".text12").css("opacity","0");}

        // Thursday

        if ($(window).scrollTop() > 3000) {
        $("#wed5").hide(); 
        $('#thu').show();
        $(".text13").css("opacity","1");
        $('.thu').css("background-image", "linear-gradient(#eecde2, #35459c)");}
              else {
                $("#thu").hide();
                $(".text13").css("opacity","0");
                $('.thu').css("background-image", "linear-gradient(white, white)");}

          // Friday

          if ($(window).scrollTop() > 3700) {
        $("#thu").hide(); 
        $('#fri').show();
        $(".text14").css("opacity","1");
        $('.fri').css("background-image", "linear-gradient(#ffe1bb, #026684)");}
              else {
                $("#fri").hide();
                $(".text14").css("opacity","0");
                $('.fri').css("background-image", "linear-gradient(white, white)");}

          if ($(window).scrollTop() > 4000) {
        $("#fri").hide(); 
        $('#fri2').show();
        $(".text14").css("opacity","0");
        $(".text15").css("opacity","1");}
              else {
                $("#fri2").hide();
                $(".text15").css("opacity","0");}

            // Saturday

             if ($(window).scrollTop() > 4600) {
        $("#fri2").hide(); 
        $('#sat').show();
        $(".text16").css("opacity","1");
        $('.sat').css("background-image", "linear-gradient(#d2edf3, #663434)");}
              else {
                $("#sat").hide();
                $(".text16").css("opacity","0");
                $('.sat').css("background-image", "linear-gradient(white, white)");}
            if ($(window).scrollTop() > 5000) {
        $("#sat").hide();}



    });
  }
}


});



