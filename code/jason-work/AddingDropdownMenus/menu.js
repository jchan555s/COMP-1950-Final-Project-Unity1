$(document).ready(function(){

  $("#dropdownbox-lecture").click(function(){
    $("#lecture-menu").toggleClass("showMenu-lecture");
      $("#lecture-menu > li").click(function(){
        $("#dropdownbox-lecture > p").text($(this).text());
        $(".menu").removeClass("showMenu-lecture");
      });
  });
  

  $("#dropdownbox-exercise").click(function(){
    $("#exercise-menu").toggleClass("showMenu-exercise");
      $("#exercise-menu > li").click(function(){
        $("#dropdownbox-exercise > p").text($(this).text());
        $("#exercise-menu").removeClass("showMenu-exercise");
      });
  });
  
  
  $("#dropdownbox-quiz").click(function(){
    $("#quiz-menu").toggleClass("showMenu-quiz");
      $("#quiz-menu > li").click(function(){
        $("#dropdownbox-quiz > p").text($(this).text());
        $("#quiz-menu").removeClass("showMenu-quiz");
      });
  });
  
  $("#dropdownbox-courseinfo").click(function(){
    $("#courseinfo-menu").toggleClass("showMenu-courseinfo");
      $("#courseinfo-menu > li").click(function(){
        $("#dropdownbox-courseinfo > p").text($(this).text());
        $("#courseinfo-menu").removeClass("showMenu-courseinfo");
      });
  });
  
});

