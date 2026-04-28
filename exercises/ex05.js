let count = 0;
let colors = ["orchird", "coral", "hotpink", "plum"];

$("#needy-button").click(function() {
    $("#needy-button").html( "clicks: " + count + " color: " + colors[count] );
    $("body").css("background-color", colors[count]);
    count = count + 1;

    if (count==4) {
        count = 0;
        console.log ("it happened");

    }
    if (colors[count] != "hotpink") {
        $("#needy-button").after
        ("notPink");
    
    }
    else {
        $("#needy-button").after("  pink ");

       
    }
});