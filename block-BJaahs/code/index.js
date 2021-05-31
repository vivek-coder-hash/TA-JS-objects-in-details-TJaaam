function quizFb(title, options, correctAnswerIndex) {

    let obj = {
        title : title,
        options : options,
        correctAnswerIndex : correctAnswerIndex,
        isAnswerCorrect : function (index) {
            return this.correctAnswerIndex === index ?  true : false;
        },
        getCorrectAnswer : function () {
            return this.options[this.correctAnswerIndex];
        },
    }
    return obj;
}

let quiz = quizFb ('Where is the capital of Jordan', ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'], 1);
