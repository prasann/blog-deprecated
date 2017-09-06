$(document).ready(function() {
    $("#comment_form").on("submit", function(event) {
      $('#comment_form').find('button').prop('disabled', true);
        $.ajax({
            type: "POST",
            url: "https://api.staticman.net/v2/entry/prasann/blog/master/comments",
            data: $("#comment_form").serialize(), // serializes the form's elements.
            success: function(data) {
              $('#comment_success').show();
              $('#comment_message').val('');
              $('#comment_email').val('');
              $('#comment_form').find('button').prop('disabled', false);
            },
            error: function(data) {
              $('#comment_error').show();
              $('#comment_form').find('button').prop('disabled', false);
            }
        });
        event.preventDefault();
    });

});
