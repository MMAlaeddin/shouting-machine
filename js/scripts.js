$(document).ready(function() {
    $("#formOne").submit(function(event) {
        var greetingInput = $("input#greeting").val();
            $(".output").text(greetingInput);
            console.log(greetingInput)
        event.preventDefault();
    });
});