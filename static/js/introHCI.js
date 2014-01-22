'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$('#testjs').text("Please wait...");
		$(".jumbotron p").toggleClass("active");
	});

	$("#submitBtn").click(function(e) {
		var proj = $("#project").val();
		//$(proj).width = $("#width").val();
		$(proj).animate({
      		width: $('#width').val()
      		//description: $("#description").val()
   		});
   		var description = $('#description').val();
   		$(proj).find(".project-description").text($('#description').val());
	    //var description = $(proj).find(".project-description");
		//$(description).txt($("#description").val());
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
}

function projectClick(e) {
  // Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
    //var jumbotronHeader = $("#jumbotron h1");
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);
    var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) { 
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    } else { 
       $(description).toggle(); 
       //description.length = 0;
       //description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    
    	//$(description).show(); 
    }
}