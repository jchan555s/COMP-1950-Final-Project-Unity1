$(document).ready(function(){

  /* click on lecture menu */
  $("#dropdownbox-lecture").click(function(){
  
    // reset other menus
	$("#exercise-menu").removeClass("showMenu-exercise");
	$("#quiz-menu").removeClass("showMenu-quiz");
	$("#courseinfo-menu").removeClass("showMenu-courseinfo");
	
    $("#lecture-menu").toggleClass("showMenu-lecture");
      $("#lecture-menu > li").click(function(){
        $("#dropdownbox-lecture > p").text($(this).text());
        $("#lecture-menu").removeClass("showMenu-lecture");
      });
  });
  

  /* click on Exercise Menu */
  $("#dropdownbox-exercise").click(function(){
	// reset other menus
	$("#lecture-menu").removeClass("showMenu-lecture");	
	$("#quiz-menu").removeClass("showMenu-quiz");
	$("#courseinfo-menu").removeClass("showMenu-courseinfo");
  
    $("#exercise-menu").toggleClass("showMenu-exercise");
      $("#exercise-menu > li").click(function(){
        $("#dropdownbox-exercise > p").text($(this).text());
        $("#exercise-menu").removeClass("showMenu-exercise");
      });
  });
  
  
  /* click on Quiz Menu */
  $("#dropdownbox-quiz").click(function(){
  
	// reset other menus.
  	$("#lecture-menu").removeClass("showMenu-lecture");
	$("#exercise-menu").removeClass("showMenu-exercise");	
	$("#courseinfo-menu").removeClass("showMenu-courseinfo");
	
    $("#quiz-menu").toggleClass("showMenu-quiz");
      $("#quiz-menu > li").click(function(){
        $("#dropdownbox-quiz > p").text($(this).text());
        $("#quiz-menu").removeClass("showMenu-quiz");
      });
  });
  
  /* click on Course Info menu */
  $("#dropdownbox-courseinfo").click(function(){
    $("#lecture-menu").removeClass("showMenu-lecture");
	$("#exercise-menu").removeClass("showMenu-exercise");
	$("#quiz-menu").removeClass("showMenu-quiz");
	
	
    $("#courseinfo-menu").toggleClass("showMenu-courseinfo");
      $("#courseinfo-menu > li").click(function(){	 	   		
        $("#dropdownbox-courseinfo > p").text($(this).text());
        $("#courseinfo-menu").removeClass("showMenu-courseinfo");
					
      });
  });
  
});

function resetMenu(){
	$("#lecture-menu").removeClass("showMenu-lecture");
	$("#exercise-menu").removeClass("showMenu-exercise");
	$("#quiz-menu").removeClass("showMenu-quiz");
	$("#courseinfo-menu").removeClass("showMenu-courseinfo");
}