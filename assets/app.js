$('#start').on('click', function () {
    game.start();
})

$(document).on('click', '#end',function(){
    game.done();
})

var questions = [{
    question: "The most legendary ship in the galaxy, the millennium falcon, can comfortably fit how many people in the cockpit?",
    answers: ["four", "three", "six", "nine"],
    correctAnswer: "Four"
}, {

    question: "Admiral raddus and admiral ackbar both hail from which planet?",
    answers: ["mon cala", "gatalenta", "ryloth", "coruscant"],
    correctAnswer: "Mon cala"
}, {

    question: "R2-D2 is classified as what type of droid?",
    answers: ["protocol droid", "battle droid", "labor droid", "astromech droid"],
    correctAnswer: "Astromech droid"
}, {

    question: "How much total does obi-wan kenobi agree to pay han solo for safe passage to alderaan?",
    answers: ["10,000", "2,000", "17,000", "23,000"],
    correctAnswer: "10,000"
}, {
    question: "Which handmaiden of queen padmé amidala served as decoy for the queen?",
    answers: ["Eirtae", "Sabe", "Rabe", "Sache"],
    correctAnswer: "Sabe"
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 20,
    countdown: function (){
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            // console.log("time is up");
            game.done();
        }
    },
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $('#subwrapper').prepend('<h2>time remaining: <span id="counter">120</span> seconds</h2>')
        $('#start').remove();
        for (var i = 0; i < questions.length; i++) {
            $('#subwrapper').append('<h2>' + questions[i].question + '<h2>')
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#subwrapper").append("<input type='radio' name=question-" + i + " 'value'" + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }

        }
        $('#subwrapper').append('<br><button id="end">DONE</button>');

    },
    done: function(){
        $.each($('input[name="question-1]":checked'),function(){
            if ($(this).val()==questions[1].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;

            }
        });

        this.result();
        },
        result: function(){
            clearInterval(timer);
            $('#subwrapper h2').remove();

            $('#subwrapper').html("<h2>All Done!</h2>");
            $('#subwrapper').append("<h3>Correct Answers:" +this.correct+"</h3>");
            $('#subwrapper').append("<h3>incorrect Answers:" +this.incorrect+"</h3>");
            $('#subwrapper').append("<h3>unanswered: "+(questions.length-(this.incorrect+this.correct))+"<h3>");



        }
    }
