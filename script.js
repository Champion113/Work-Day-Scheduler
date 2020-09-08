$(document).ready(function(){


$(".saveBtn").on("click", function(){
// things that happen on the button
    var activity = $(this).siblings(".description").val();
    console.log(activity)
})

//  funtion to be able to detect time using moments;
    $("#currentDay").text(moment().format('dddd, MMMM Do YYYY'));

// moment time function
    var currentTime = moment().format('H');
    var currentHour = moment().hours();

// funtion to determine if time past present or future within hour timeframe
 
    $(".row-timeblocks").each(function () {
        var blockHour = parseInt($(this).attr("id").split("-")[ 1 ]);

// loop over timeblock
    if (blockHour < currentHour) {
        $(this).addClass("past");
    }
    else if (blockHour === currentHour) {
        $(this).addClass("present");
    }
    else {
        $(this).addClass("future");
        }
    });
    });



//save to local storage
    var loadTasks = function() {
    var list = JSON.parse(localStorage.getItem("col-md-10 description")) || [];
    localStorage.setItem('col-md-10 description', JSON.stringify(list));
//textbox clears when saved
    $('#col-md-10 description').val('');
    list.spice(blockHour, 1)
}
