//Wait for the page to load before running our Ajax request
$(document).ready(function(){
    //Start the Ajax request. First param is the URL with the data.
    //Second param is a func. that handles the response.
    $.get("sentence.html", function(response) {
        //Get the element on the page with the id of sentences
        //and insert the response
        $("#sentences").html(response);
    });

    $.get("this_doesnt_exist.html", function(data) {
        //This will not be called because the .html file request doesn't this_doesnt_exist
        doSomethingGood();
    }).fail(function(error) {
        //This is called when an error occurs
        console.log("Something went wrong: " + error);
    });
});