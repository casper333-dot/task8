$(document).ready(function () {

    $("#btnSubmit").click(function () {

        if ($("#exampleText").val() === "") {

            alert("Textbox Is Required");
        } else {

            $(".task8").prepend("<h2>" + $("#exampleText").val() + "</div>")
        }

    });

});