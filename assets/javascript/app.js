var time = 45;
var correct = 0;
var incorrect = 0;
var unanswered = 8;


$("#start").on("click", function() {
    $(".startScreenMain").hide();
    $("#game").show();
    // start timer function here
    start();
})

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

// set interval that everysecond run the time
function intervalCountDown() {
    $("#timer").html("<h4>You have " + time + " seconds left</h4>");
    time--;
}

// when timer = 0 then show results page
function results () {
    questionCount();
    $("#game").hide();
    $("#results").show();
    $("#results").html("<h4>You answered " + correct + " correct</h4><br><h4>You answered " + incorrect + " incorrect</h4><br><h4>You did not answer "+ unanswered + "</h4>")
    
}

$("input[name='question1']:checked").on("click", function() {
    console.log($("input[name='question1']:checked").val())

})

var answer1 = $("input[name='question1']:checked").val();
console.log(answer1)


function questionCount () {

if ($( "input[name='question1']:checked" ).val() === "correct") {
    correct++;
    unanswered--;
} else if ($( "input[name='question1']:checked" ).val() === "incorrect") {
    incorrect++;
    unanswered--;
};

if ($( "input[name='question2']:checked" ).val() === "correct") {
    correct++;
    unanswered--;
} else if ($( "input[name='question2']:checked" ).val() === "incorrect") {
    incorrect++;
    unanswered--;
};

if ($( "input[name='question3']:checked" ).val() === "correct") {
    correct++;
    unanswered--;
} else if ($( "input[name='question3']:checked" ).val() === "incorrect") {
    incorrect++;
    unanswered--;
};

if ($( "input[name='question4']:checked" ).val() === "correct") {
    correct++;
    unanswered--;
} else if ($( "input[name='question4']:checked" ).val() === "incorrect") {
    incorrect++;
    unanswered--;
};

if ($( "input[name='question5']:checked" ).val() === "correct") {
    correct++;
    unanswered--;
} else if ($( "input[name='question5']:checked" ).val() === "incorrect") {
    incorrect++;
    unanswered--;
};

if ($( "input[name='question6']:checked" ).val() === "correct") {
    correct++;
    unanswered--;
} else if ($( "input[name='question6']:checked" ).val() === "incorrect") {
    incorrect++;
    unanswered--;
};

if ($( "input[name='question7']:checked" ).val() === "correct") {
    correct++;
    unanswered--;
} else if ($( "input[name='question7']:checked" ).val() === "incorrect") {
    incorrect++;
    unanswered--;
};

if ($( "input[name='question8']:checked" ).val() === "correct") {
    correct++;
    unanswered--;
} else if ($( "input[name='question8']:checked" ).val() === "incorrect") {
    incorrect++;
    unanswered--;
};
}
