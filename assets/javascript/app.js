var time = 30;
var numberOfCheckedRadio = $(":radio[name='question1']:checked, :radio[name='question2']:checked, :radio[name='question3']:checked, :radio[name='question4']:checked, :radio[name='question5']:checked, :radio[name='question6']:checked, :radio[name='question7']:checked, :radio[name='question8']:checked").length;
var correct = 0;
var incorrect = 0;
var unanswered = 8-numberOfCheckedRadio;


$("#start").on("click", function() {
    $(".startScreenMain").hide();
    $("#game").show();
    // start timer function here
    start();
})

// counting right and wrong answers here


// when timer = 0 then show results page
function results () {
    $("#game").hide();
    $("#results").show();
    $("#results").html("<h4>You answered " + correct + " correct</h4><br><h4>You answered " + incorrect + " incorrect</h4><br><h4>You did not answer "+ unanswered + "</h4>")
    
}

// set interval that everysecond run the time
function intervalCountDown() {
    $("#timer").html("<h4>You have " + time + " seconds left</h4>");
    time--;
}
// setTimeout(results, 90*1000);
function start() {
    intervalId = setTimeout (results, time*1000)
    if (time === 0) {
        clearInterval(intervalId);
        clearTimeout(intervalId);
        results();
    } else {
        setInterval(intervalCountDown, 1000);
    }
}

var answer1 = $("input[name='question1']:checked").val();
console.log(answer1)
// function questionCount () {
// if question 1 is selected unanswered - 1

// if question 1 input value = correct then correct + 1

// if ($("input[name='question1']:checked").val()="correct") {
//     correct++;
//     unanswered--;
// } else if ($("input[name='question1']:checked").val()="incorrect") {
//     incorrect++;
//     unanswered--;
// }

// else is question 1 input value = incorrect + 1




// }
