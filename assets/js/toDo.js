// Check off specific to-dos by clicking

$("ul").on("click", "li", function(){  
    $(this).toggleClass("completed");
});

// Click on "X" to delete to-do
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();  
    });
    event.stopPropagation(); 
});

// Create a new to-do and add item when the "Enter" key is pressed
//select input
$("input[type='text']").keypress(function(event){
    if(event.which === 13){ 
        //grabbing new to-do text from input
        var toDoText = ($(this).val()); 
        $(this).val(""); 
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + toDoText + "</li>");
    }
});

// Have the plus icon toggle to show and hide our input line
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});
