let scorenum= document.querySelector(".score-number")
class Question {
    constructor(title, options, correctAnswer){
        this.title = title;
        this.options = options;
        this.correctAnswer = correctAnswer;
        this.getAnswerArr = [];
        this.root = document.querySelector(".question-container");
    }
    
    isCorrect(answer){
        if(Number(answer) === Number(this.correctAnswer)) {
            return true;
        }
    }
    createUi(){
        this.root.innerHTML = "";
        let h3 = document.createElement("h3");
        h3.innerHTML = `<strong>Question:</strong> <span class="question">${this.title}</span>`
        let optionBox = document.createElement("div");
        optionBox.classList = "options";
        let button = document.createElement("button");
        button.setAttribute("type" , "submit");
        button.innerText = "SUBMIT"
        this.options.forEach((element,index) => {
            let input = document.createElement("input");
            input.setAttribute("type" , "radio");
            input.setAttribute("id" , index);
            input.setAttribute("name" , "index")
            let label =document.createElement("label");
            label.setAttribute("for" , index) 
            input.setAttribute("data-id" , index);
            label.setAttribute("data-id" , index);
            label.innerText = element;
            let br  = document.createElement("br");
            optionBox.append(input, label ,br);
        });
        this.root.append(h3, optionBox, button);
       
    };
    getCorrectAns(){
        return this.options[this.correctAnswer];
        
    }
}


class Quiz  {
    constructor(allQuestions=quizData, activeIndex=0, score=0, totalCorrect=0){
        this.allQuestions = allQuestions.map(question => new Question(question.question, question.answers, question.correctIndex));
        // console.log(this.allQuestions);
        // this.score = score;
        this.score = score
        this.activeIndex = activeIndex;
        this.totalCorrect = totalCorrect;
        this.submittedAnswers =  {
        
        }
    }
    nestQuestion(){
        if(this.allQuestions.length >= this.activeIndex){
            this.activeIndex +=1; 
           this.createUi(this.allQuestions[this.activeIndex]);
        }else{
            alert(`game is over your score is ${this.score} out off ${this.allQuestions.length}`); 
        }
    }
    createUi() {
        this.allQuestions[this.activeIndex].createUi();
        // console.log(this.allQuestions[this.activeIndex].score)
        let options = document.querySelector(".options");
        console.log(options)
        options.addEventListener("click" , (event)=> {
            console.log(event.target)
            if(!this.submittedAnswers[this.activeIndex]){
                this.submittedAnswers[this.activeIndex] = true
                if(this.allQuestions[this.activeIndex].isCorrect(event.target.dataset.id)) {
                    this.updateScore();
                }
                scorenum.innerText = this.score;
            }
        
})};
    updateScore() {
        this.score = this.score + 1 ;
        return this.score;
    };
   
} 


let tos = new Quiz();
tos.createUi();

let form = document.querySelector("form");
let submit = document.querySelector("button");

form.addEventListener("submit" , (event) => {
    event.preventDefault();
    tos.nestQuestion();
} )