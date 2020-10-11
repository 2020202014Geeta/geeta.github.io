$(document).ready(function(){
  function blink_text() {
    $('.blink').fadeOut(500);
    $('.blink').fadeIn(500);
  
  }
  setInterval(blink_text, 1000);
  $("#Skill").click(function(){
    $("#tSkill").slideToggle("slow");
  });

  $("#Ach").click(function(){
    $("#inAch").slideToggle("slow");
  });

  $("#Edu").click(function(){
    $("#inEdu").slideToggle("slow");
  });
      
});