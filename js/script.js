jQuery(document).ready(function ($) {
    $('#enterButton').click(function()
    {
        var text = $('#prependIt').val();
        if(text) 
        {
            var newParTag = $('<p class="mt-4 p-3 bg-danger text-white"></p>').text(text);
            alert("You entered the following text: "+text+".");

            $('#tasks').prepend(newParTag);
        }
        else
        {
            alert("You need to enter some text first");
        }
    });
});