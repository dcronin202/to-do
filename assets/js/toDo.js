// Check off specific to-dos by clicking

//Long Version:
// $("li").click(function(){
//     if li is gray
//     if($(this).css("color") === "rgb(128, 128, 128)"){
//         turn it black
//         $(this).css({
//             color: "black",
//             textDecoration: "none",
//         })
//     } else {
//         turn it gray
//         $(this).css({
//             color: "gray",
//             textDecoration: "line-through",
//         })
//     }
// });

//Or just do this (using the "completed" class in our CSS document):
//Note: We had to change "click" to "on" so we could delete any future items added. Also, when using "on", we have to set it to the parent element (in this case, "ul" instead of "li"; we do the same below with our "span" element).
$("ul").on("click", "li", function(){  
    $(this).toggleClass("completed");
});

// Click on "X" to delete to-do
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();  //this fades/removes the entire li, instead of just the span itself
    });
    event.stopPropagation();  //this stops the click event from "bubbling up" to the li parent element
});

// Create a new to-do and add item when the "Enter" key is pressed
//select input
$("input[type='text']").keypress(function(event){
    if(event.which === 13){  //"which" is how we select the keycode (13) to use as our event
        //grabbing new to-do text from input
        var toDoText = ($(this).val()); 
        $(this).val("");  //this clears the text from the input line
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + toDoText + "</li>");
    }
});

// Have the plus icon toggle to show and hide our input line
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});