$(document).ready(function(){


$(".saveBtn").on("click", function(){
// things that happen on the button
var activity = $(this).siblings(".description").val();

console.log(activity)
})

//  funtion to be able to detect time using moments;
$("#currentDay").text(moment().format('dddd, MMMM Do YYYY'));

// funtion to determine if time past present or future within hour timeframe
var currentTime = moment().format('H');
// set colors based on timeframe p-grey pr-green f-red
$('.colorcode').each(function name(params) {
    
})



//save to local storage
//localStorage.setItem('col-md-10 description', JSON.stringify(list));
//textbox clears when saved
})
