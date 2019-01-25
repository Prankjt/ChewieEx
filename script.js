"use script";

class Applicant { 
    constructor(name, score) {
        this.name = name; 
        this.score = score;                         
    }
}

class CandidateBook {
    constructor() {
        this.contacts = [];   //Properties []= array to be filled by data
    }
    add(info) {               
        this.contacts.push(info);  
    }
    list(sortlist) {     
        this.contacts.sort(sortlist);     
    }
    
    print() {                //Method print 
        for (let i = 0; i < this.contacts.length; i++) { 
            console.log(this.contacts[i]);
        }
    }
    
}


function sortlist(a, b) {
    if (a > b) {
      return 1;
    } else if (b > a) {
      return -1;
    } else {
      return 0;
    }
  }

const book = new CandidateBook();
console.log(book);  //prints the input in the paratheses
book.add(new Applicant("Kurt", 16 ));
book.add(new Applicant("Leo", 18));

book.print();   // object name.method name, to use the method

while (true) {          // Begin while loop, the code will continue to operate as long as the condition holds true
    const choice = prompt("Would you like to apply to be Chewbacca's friend? Yes or No");

    if (choice === "yes") {     //"if" = keyword, ()=condition to hold true
        const name = prompt("Enter name: "); //prompt method that displays a dialog box asking for user input, constant variable with variable name
        const friendly = parseInt(prompt("On a scale of 1 to 10 with 1 being least friendly, How easily do you make friends?"), 10);
        const flying = parseInt(prompt("On a scale of 1 to 10 with 1 being least flying skill afraid, What is your skill level flying?"), 10);
        const dejarik = parseInt(prompt("On a scale of 1 to 10 with 1 being least Dejarik skill, What is your skill level with Dejarik?"), 10);
        const fear = parseInt(prompt("On a scale of 1 to 10 with 1 being least afraid, How afraid of the Galactic Empire are you?"), 10)
        const score = (friendly + flying + dejarik - fear);
        // console.log(score)
        book.add(new Applicant(name, score)); // object name.method name, to use the method

    } else {  //"else if" = keyword, ()=condition to hold true
        console.log("Cya later");  //prints the string in the paratheses
        break;
    }
    
   

}