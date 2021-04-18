$(document).ready(function(){
  $("#design").click(function(){
    $("#designimg").toggle();
    $("#designdesc").toggle();
  });
});

$(document).ready(function(){
  $("#dev").click(function(){
    $("#devimg").toggle();
    $("#development").toggle();
  });
});

$(document).ready(function(){
  $("#management").click(function(){
    $("#productimg").toggle();
    $("#product").toggle();
  });
});


$(document).ready(function(){
  $("#work4").mouseover(function(){
    $("#overlay1").show();
  }).mouseout(function(){
    $("#overlay1").hide();
  });
});
$(document).ready(function(){
  $("#work3").mouseover(function(){
    $("#overlay2").show();
  }).mouseout(function(){
    $("#overlay2").hide();
  });
});