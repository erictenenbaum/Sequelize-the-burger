$(function() {

    $(".create-burger").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burgerName").val().trim(),
            devoured: 0
        };

        // Send the POST request.
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new cat");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

// Old code befroe I added the customer review feature

    // $(".devour").on("click", function() {
    //     // alert($(this).data("id"));
    //     var id = $(this).data("id");

    //     var successObj = {
    //         sucess: true
    //     }

    //     $.ajax("/api/burger/" + id, {
    //         type: "PUT",
    //         data: successObj
    //     }).then(function() {
    //         console.log("changed to devoured");
    //         location.reload();
    //     });
    // }); 


$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
   // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.

  var burgerId = button[0].attributes[2].value;

  var modal = $(this)

  modal.find('.modal-title').text('Burger Review ')
  modal.find('.modal-body input').val()

  $(".submit").on("click", function(){

    var customer_name = $("#customer-name").val().trim();
    var review = $("#message-text").val().trim();
    var burger = parseInt(burgerId);

    var customerReview = {
        customer_name: customer_name,
        burger: burger,
        review: review
    }
    
    console.log(customerReview);

      $.ajax("/api/burger/" + burger, {
            type: "PUT",
            data: customerReview
        }).then(function() {
            console.log("changed to devoured");
            location.reload();
        });


    // location.reload();
  })
})




    $(".delete").on("click", function(){
      var id = $(this).data("id");

      $.ajax("/api/burger/" + id, 
      {
        type: "DELETE"
      }).then(function(){
        console.log("Deleted id " + id);

        location.reload();
      });
    });



});