$(document).ready(function(){

var now = 

$(".btn").on("click", function(){
// things that happen on the button
var activity = $(this).siblings(".description").val();
var hour = 

console.log(activity)
})
/////
$(".textData").dblclick(function () {
    $(this).addClass('d-none')
    $(this).siblings("input").removeClass("d-none");
});

$(".btn").dblclick(function () {
    
    var id = $(this).attr("id")
    var time = id.slice(0,3)
    console.log(time)

    var timeInputId = time + "Input"; 
});


//////
//  funtion to be able to detect time using moments;
$("#currentDay").text(moment().format('dddd, MMMM Do YYYY'));

// funtion to determine if time past present or future within hour timeframe
var currentTime = moment().format('H');
// set colors based on timeframe p-grey pr-blue f-purple


$
})