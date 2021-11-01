// Card Class Representing a card in the
class Card  {
    constructor(question, answers){
        this.question = question;
        this.answers = answers;
    }
}
// Ui Class: Handle Ui Task
// you use static so u dont need to repeat new key word
class Ui {
    static displayCards(){
        // currentl hard coded array to test the it
        // const StoredTestCards = [
        //     {question: 'test1', answer: 'test1 answer'},
        //     {question: 'test2', answer: 'test2 answer'}, 
        //     {question: 'test3', answer:  'test3 answer'}
        //       ];
        // accesing the stared cards 
        const cards = StoredTestCards;
        
        cards.forEach((card) => Ui.addCardToList(card));
       
    }

    static addCardToList(card){
        const list = document.querySelector('#add-Card');

        const row = document.createElement('ul');

        row.innerHTML =`
        <li>${card.question}</li>
        <li>${card.answer}</li>
        <li><a href="#" class="delete">X</a></li>`;
       
        list.appendChild(row);
      }
    
    }

// Store Class : Handle Storage in the browser 

// Event: Display Card Event as alerts
// domContentLoaded show what is in the dom
document.addEventListener('DOMContentLoaded', Ui.displayCards);

// Event: Add a Book
document.querySelector('#cardDiv').addEventListener('submit', (e) => {
     
     // Get form values
     const title = document.querySelector('')
})


// Add a Card C
// remove a Card 


// hide card from
const flashcards = document.getElementsByClassName("newCards")[0];
const createBox = document.getElementsByClassName("newBox")[0];
const question = document.getElementById('question');
const answer = document.getElementById('answer');
let contentArray = [];

//construct the newCard
//tells the newcards what should be on it
function divMaker(text){
    let div = document.createElement("div");
    let smallH2 = document.createElement("h2");
    let h2Answer = document.createElement("h2");
    let button = document.createElement("h2")

   

    div.className = 'newCards';

    smallH2.setAttribute('style',"border-top: 1px solid red; padding: 15px; margin-top: 30px");
    //put text on of h2  
    smallH2.innerHTML = text.myQuestion

    h2Answer.setAttribute('style', "text-align:center; display:none; color: red")
    //h2 answer as text 
    h2Answer.innerHTML = text.myAnswer

    button.setAttribute('style', "text-align:center; color: red")
    //
    button.innerHTML = "Click to show answer"

    //setting up the order it should apear in the newCards 
    div.appendChild(smallH2);
    div.appendChild(h2Answer);
    div.appendChild(button)

    //hides the answer untill the card is click 
    //then the answer will show 
    div.addEventListener("click", function(){
        if(h2Answer.style.display == "none"){
            button.style.display = "none"
            h2Answer.style.display = "block";
        }else{
            button.style.display = "block"
            h2Answer.style.display = "none";
        }
    })

    flashcards.appendChild(div);
}