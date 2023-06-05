$(document).ready(
    function () {

        $("#PRINT_TEXT").click(function () {
            console.log("print");
            $("#HelloWorld").show();
        });

        $("#BOLD").click(function () {
            console.log("print");
            $("#HelloWorld").css("font-weight", "bold");
        });

       

        $("#ITALIC").click(function () {
            console.log("print");
            $("#HelloWorld").css("font-style", "italic");

        });

        $("#UNDERLINE").click(function () {
            console.log("print");
            $("#HelloWorld").css("text-decoration", "underline");
        });

        $("#RESET").click(function () {
            console.log("print");
            $("#HelloWorld").removeAttr('style');
        });


    }

);
